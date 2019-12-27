/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ScreenName } from '@ulangi/ulangi-common/enums';
import * as _ from 'lodash';

import { SingleScreenStyle } from '../../styles/SingleScreenStyle';
import { useCustomTopBar } from '../../utils/useCustomTopBar';

export class SignInScreenStyle {
  public static SCREEN_BASE_STYLES_ONLY = _.merge(
    {},
    SingleScreenStyle.SCREEN_BASE_STYLES_ONLY,
    {
      topBar: useCustomTopBar({
        screenName: ScreenName.SIGN_IN_SCREEN,
        styles: {
          light: SingleScreenStyle.TOP_BAR_LIGHT_STYLES,
          dark: SingleScreenStyle.TOP_BAR_DARK_STYLES,
        },
      }),
    },
  );

  public static SCREEN_LIGHT_STYLES_ONLY = _.merge(
    {},
    SingleScreenStyle.SCREEN_LIGHT_STYLES_ONLY,
    {},
  );

  public static SCREEN_DARK_STYLES_ONLY = _.merge(
    {},
    SingleScreenStyle.SCREEN_DARK_STYLES_ONLY,
    {},
  );

  public static SCREEN_FULL_LIGHT_STYLES = _.merge(
    {},
    SignInScreenStyle.SCREEN_BASE_STYLES_ONLY,
    SignInScreenStyle.SCREEN_LIGHT_STYLES_ONLY,
  );

  public static SCREEN_FULL_DARK_STYLES = _.merge(
    {},
    SignInScreenStyle.SCREEN_BASE_STYLES_ONLY,
    SignInScreenStyle.SCREEN_DARK_STYLES_ONLY,
  );
}
