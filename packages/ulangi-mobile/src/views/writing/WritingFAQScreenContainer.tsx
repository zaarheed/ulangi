/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { Options } from '@ulangi/react-native-navigation';
import { ScreenName, Theme } from '@ulangi/ulangi-common/enums';
import { ObservableScreen } from '@ulangi/ulangi-observable';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Container, ContainerPassedProps } from '../../Container';
import { WritingFAQScreenIds } from '../../constants/ids/WritingFAQScreenIds';
import { ScreenFactory } from '../../factories/ScreenFactory';
import { WritingFAQScreen } from './WritingFAQScreen';
import { WritingFAQScreenStyle } from './WritingFAQScreenContainer.style';

@observer
export class WritingFAQScreenContainer extends Container {
  public static options(props: ContainerPassedProps): Options {
    return props.theme === Theme.LIGHT
      ? WritingFAQScreenStyle.SCREEN_FULL_LIGHT_STYLES
      : WritingFAQScreenStyle.SCREEN_FULL_DARK_STYLES;
  }

  protected observableScreen = new ObservableScreen(
    ScreenName.WRITING_FAQ_SCREEN
  );

  private screenFactory = new ScreenFactory(
    this.props,
    this.eventBus,
    this.observer
  );

  private navigatorDelegate = this.screenFactory.createNavigatorDelegate();

  public navigationButtonPressed({ buttonId }: { buttonId: string }): void {
    if (buttonId === WritingFAQScreenIds.BACK_BTN) {
      this.navigatorDelegate.pop();
    }
  }

  protected onThemeChanged(theme: Theme): void {
    this.navigatorDelegate.mergeOptions(
      theme === Theme.LIGHT
        ? WritingFAQScreenStyle.SCREEN_LIGHT_STYLES_ONLY
        : WritingFAQScreenStyle.SCREEN_DARK_STYLES_ONLY
    );
  }

  public render(): React.ReactElement<any> {
    return (
      <WritingFAQScreen darkModeStore={this.props.rootStore.darkModeStore} />
    );
  }
}
