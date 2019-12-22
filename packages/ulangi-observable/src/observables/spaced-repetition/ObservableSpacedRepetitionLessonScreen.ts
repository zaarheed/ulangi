/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ActivityState, ScreenName } from '@ulangi/ulangi-common/enums';
import { IObservableValue, ObservableMap } from 'mobx';

import { ObservableReviewActionBarState } from '../review-action/ObservableReviewActionBarState';
import { ObservableFeedbackListState } from '../review-feedback/ObservableFeedbackListState';
import { ObservableReviewFeedbackBarState } from '../review-feedback/ObservableReviewFeedbackBarState';
import { ObservableScreen } from '../screen/ObservableScreen';
import { ObservableVocabulary } from '../vocabulary/ObservableVocabulary';
import { ObservableReviewState } from './ObservableReviewState';

export class ObservableSpacedRepetitionLessonScreen extends ObservableScreen {
  public readonly vocabularyList: ObservableMap<string, ObservableVocabulary>;

  public readonly reviewState: ObservableReviewState;

  public readonly reviewActionBarState: ObservableReviewActionBarState;

  public readonly reviewFeedbackBarState: ObservableReviewFeedbackBarState;

  public readonly feedbackListState: ObservableFeedbackListState;

  public readonly saveState: IObservableValue<ActivityState>;

  public readonly speakState: IObservableValue<ActivityState>;

  public readonly shouldShowResult: IObservableValue<boolean>;

  public readonly shouldShowAdOrGoogleConsentForm: IObservableValue<boolean>;

  public constructor(
    vocabularyList: ObservableMap<string, ObservableVocabulary>,
    reviewState: ObservableReviewState,
    reviewActionBarState: ObservableReviewActionBarState,
    reviewFeedbackBarState: ObservableReviewFeedbackBarState,
    feedbackListState: ObservableFeedbackListState,
    saveState: IObservableValue<ActivityState>,
    speakState: IObservableValue<ActivityState>,
    shouldShowResult: IObservableValue<boolean>,
    shouldShowAdOrGoogleConsentForm: IObservableValue<boolean>,
    screenName: ScreenName
  ) {
    super(screenName);
    this.vocabularyList = vocabularyList;
    this.reviewState = reviewState;
    this.reviewActionBarState = reviewActionBarState;
    this.reviewFeedbackBarState = reviewFeedbackBarState;
    this.feedbackListState = feedbackListState;
    this.saveState = saveState;
    this.speakState = speakState;
    this.shouldShowResult = shouldShowResult;
    this.shouldShowAdOrGoogleConsentForm = shouldShowAdOrGoogleConsentForm;
  }
}
