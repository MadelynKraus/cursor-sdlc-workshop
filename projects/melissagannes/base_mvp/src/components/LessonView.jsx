import { useMemo, useState } from 'react'
import {
  DEFAULT_LESSON_BY_CATEGORY,
  getLesson,
} from '../data/lessons'
import { CategoryPicker } from './CategoryPicker'
import { LessonSearch } from './LessonSearch'
import { StepDiagramLoader } from './StepDiagramLoader'

export function LessonView() {
  const [categoryId, setCategoryId] = useState('animals')
  const [lessonId, setLessonId] = useState(
    () => DEFAULT_LESSON_BY_CATEGORY.animals,
  )
  const [stepIndex, setStepIndex] = useState(0)

  const lesson = useMemo(() => getLesson(lessonId), [lessonId])
  const totalSteps = lesson.steps.length
  const isLast = stepIndex >= totalSteps - 1

  function handleCategory(nextCategoryId) {
    setCategoryId(nextCategoryId)
    const nextLesson = DEFAULT_LESSON_BY_CATEGORY[nextCategoryId]
    setLessonId(nextLesson)
    setStepIndex(0)
  }

  function handlePickLesson(nextLessonId) {
    const next = getLesson(nextLessonId)
    if (!next) return
    setLessonId(nextLessonId)
    setCategoryId(next.categoryId)
    setStepIndex(0)
  }

  function goNext() {
    if (stepIndex < totalSteps - 1) setStepIndex((i) => i + 1)
  }

  function goBack() {
    if (stepIndex > 0) setStepIndex((i) => i - 1)
  }

  function restart() {
    setStepIndex(0)
  }

  const step = lesson.steps[stepIndex]
  const showCelebration = isLast

  return (
    <div className="lesson-view">
      <header className="lesson-view__header">
        <p className="lesson-view__eyebrow">StepDraw Jr</p>
        <h1 className="lesson-view__title">{lesson.title}</h1>
      </header>

      <LessonSearch
        activeLessonId={lessonId}
        onPickLesson={handlePickLesson}
      />

      <CategoryPicker
        activeCategoryId={categoryId}
        onSelect={handleCategory}
      />

      <div className="lesson-view__diagram">
        <StepDiagramLoader
          key={`${lessonId}-${stepIndex}`}
          lessonId={lessonId}
          stepIndex={stepIndex}
        />
      </div>

      <p className="lesson-view__step-label">
        Step {stepIndex + 1} of {totalSteps}
      </p>
      <p className="lesson-view__instruction">{step.text}</p>

      {showCelebration && (
        <p className="lesson-view__celebration" role="status">
          You did it! Great drawing!
        </p>
      )}

      <div className="lesson-view__nav">
        <button
          type="button"
          className="lesson-view__btn lesson-view__btn--secondary"
          onClick={goBack}
          disabled={stepIndex === 0}
        >
          Back
        </button>
        {isLast ? (
          <button
            type="button"
            className="lesson-view__btn lesson-view__btn--primary"
            onClick={restart}
          >
            Draw again
          </button>
        ) : (
          <button
            type="button"
            className="lesson-view__btn lesson-view__btn--primary"
            onClick={goNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
