/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { Theme } from '@ulangi/ulangi-common/enums';
import { PublicVocabulary } from '@ulangi/ulangi-common/interfaces';
import {
  ObservablePublicDefinition,
  ObservablePublicVocabulary,
} from '@ulangi/ulangi-observable';
import * as _ from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Images } from '../../constants/Images';
import { PublicVocabularyItemIds } from '../../constants/ids/PublicVocabularyItemIds';
import { DefaultText } from '../common/DefaultText';
import { FixedTouchableWithoutFeedback } from '../common/FixedTouchableWithoutFeedback';
import { DefinitionExtraFieldList } from '../vocabulary/DefinitionExtraFieldList';
import { VocabularyExtraFieldList } from '../vocabulary/VocabularyExtraFieldList';
import { WordClassList } from '../vocabulary/WordClassList';
import {
  PublicVocabularyItemStyles,
  darkStyles,
  lightStyles,
} from './PublicVocabularyItem.style';

export interface PublicVocabularyItemProps {
  theme: Theme;
  vocabulary: ObservablePublicVocabulary;
  addVocabulary: (vocabulary: PublicVocabulary) => void;
  showPublicVocabularyActionMenu: (vocabulary: PublicVocabulary) => void;
  openLink: (link: string) => void;
  styles?: {
    light: PublicVocabularyItemStyles;
    dark: PublicVocabularyItemStyles;
  };
}

@observer
export class PublicVocabularyItem extends React.Component<
  PublicVocabularyItemProps
> {
  public get styles(): PublicVocabularyItemStyles {
    const light = this.props.styles ? this.props.styles.light : lightStyles;
    const dark = this.props.styles ? this.props.styles.dark : darkStyles;
    return this.props.theme === Theme.LIGHT ? light : dark;
  }

  public render(): React.ReactElement<any> {
    return (
      <FixedTouchableWithoutFeedback
        testID={PublicVocabularyItemIds.PUBLIC_VOCABULARY_CONTAINER_BY_VOCABULARY_TEXT(
          this.props.vocabulary.vocabularyText,
        )}>
        <View style={this.styles.container}>
          <View style={this.styles.vocabulary_text_container}>
            <View style={this.styles.left}>
              <DefaultText style={this.styles.vocabulary_text}>
                {this.props.vocabulary.vocabularyTerm}
              </DefaultText>
              {this.renderSources()}
            </View>
            <View style={this.styles.right}>
              {this.renderAddButton()}
              {this.renderActionButton()}
            </View>
          </View>
          <VocabularyExtraFieldList
            theme={this.props.theme}
            extraFields={this.props.vocabulary.extraFields}
          />
          <View style={this.styles.definition_list_container}>
            {_.map(
              this.props.vocabulary.definitions,
              (definition, index): React.ReactElement<any> =>
                this.renderDefintion(definition, index),
            )}
          </View>
        </View>
      </FixedTouchableWithoutFeedback>
    );
  }

  private renderSources(): React.ReactElement<any> {
    return (
      <View style={this.styles.source_list}>
        {this.props.vocabulary.formattedSourcesAndLinks.map(
          ({ formattedSource, link }, index): React.ReactElement<any> => {
            return (
              <View key={formattedSource} style={this.styles.source_container}>
                {index > 0 ? (
                  <View style={this.styles.dot_container}>
                    <DefaultText style={this.styles.dot}>
                      {'\u00B7'}
                    </DefaultText>
                  </View>
                ) : null}
                <DefaultText
                  style={this.styles.source}
                  onPress={(): void => {
                    if (typeof link !== 'undefined') {
                      this.props.openLink(link);
                    }
                  }}>
                  {'By ' + formattedSource}
                </DefaultText>
              </View>
            );
          },
        )}
      </View>
    );
  }

  private renderDefintion(
    definition: ObservablePublicDefinition,
    index: number,
  ): React.ReactElement<any> {
    return (
      <View key={index} style={this.styles.definition_container}>
        <View style={this.styles.meaning_container}>
          <WordClassList
            wordClasses={
              definition.extraFields.wordClass.length > 0
                ? definition.extraFields.wordClass.map(
                    (values): string => values[0],
                  )
                : definition.wordClasses
            }
            isUsingCustomWordClasses={
              definition.extraFields.wordClass.length > 0
            }
            noBorder={this.props.theme === Theme.DARK}
          />
          <View style={this.styles.plain_meaning_container}>
            <DefaultText style={this.styles.plain_meaning}>
              {definition.plainMeaning}
            </DefaultText>
          </View>
        </View>
        <DefinitionExtraFieldList
          theme={this.props.theme}
          extraFields={definition.extraFields}
        />
      </View>
    );
  }

  private renderAddButton(): React.ReactElement<any> {
    return (
      <TouchableOpacity
        testID={PublicVocabularyItemIds.SHOW_PUBLIC_VOCABULARY_ACTION_MENU_BTN_BY_VOCABULARY_TEXT(
          this.props.vocabulary.vocabularyText,
        )}
        style={this.styles.button}
        onPress={(): void => {
          this.props.addVocabulary(this.props.vocabulary);
        }}>
        <Image
          source={
            this.props.theme === Theme.LIGHT
              ? Images.ADD_BLACK_16X16
              : Images.ADD_MILK_16X16
          }
        />
      </TouchableOpacity>
    );
  }

  private renderActionButton(): React.ReactElement<any> {
    return (
      <TouchableOpacity
        testID={PublicVocabularyItemIds.ADD_VOCABULARY_BTN_BY_VOCABULARY_TEXT(
          this.props.vocabulary.vocabularyText,
        )}
        style={this.styles.button}
        onPress={(): void => {
          this.props.showPublicVocabularyActionMenu(this.props.vocabulary);
        }}>
        <Image
          source={
            this.props.theme === Theme.LIGHT
              ? Images.HORIZONTAL_DOTS_BLACK_16X16
              : Images.HORIZONTAL_DOTS_MILK_16X16
          }
        />
      </TouchableOpacity>
    );
  }
}
