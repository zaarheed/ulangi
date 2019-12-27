/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ScreenName } from '@ulangi/ulangi-common/enums';
import * as _ from 'lodash';

import { SpacedRepetitionScreenIds } from '../../constants/ids/SpacedRepetitionScreenIds';
import { LessonScreenStyle } from '../../styles/LessonScreenStyle';
import { useCustomTopBar } from '../../utils/useCustomTopBar';

export class SpacedRepetitionScreenStyle {
  public static SCREEN_BASE_STYLES_ONLY = _.merge(
    {},
    LessonScreenStyle.SCREEN_BASE_STYLES_ONLY,
    {
      topBar: useCustomTopBar({
        testID: SpacedRepetitionScreenIds.TOP_BAR,
        screenName: ScreenName.SPACED_REPETITION_SCREEN,
        styles: {
          light: LessonScreenStyle.TOP_BAR_LIGHT_STYLES,
          dark: LessonScreenStyle.TOP_BAR_DARK_STYLES,
        },
      }),
    },
  );

  public static SCREEN_LIGHT_STYLES_ONLY = _.merge(
    {},
    LessonScreenStyle.SCREEN_LIGHT_STYLES_ONLY,
    {},
  );

  public static SCREEN_DARK_STYLES_ONLY = _.merge(
    {},
    LessonScreenStyle.SCREEN_DARK_STYLES_ONLY,
    {},
  );

  public static SCREEN_FULL_LIGHT_STYLES = _.merge(
    {},
    SpacedRepetitionScreenStyle.SCREEN_BASE_STYLES_ONLY,
    SpacedRepetitionScreenStyle.SCREEN_LIGHT_STYLES_ONLY,
  );

  public static SCREEN_FULL_DARK_STYLES = _.merge(
    {},
    SpacedRepetitionScreenStyle.SCREEN_BASE_STYLES_ONLY,
    SpacedRepetitionScreenStyle.SCREEN_DARK_STYLES_ONLY,
  );
}
