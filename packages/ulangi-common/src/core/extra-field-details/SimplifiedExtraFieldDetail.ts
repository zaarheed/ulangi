/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import * as Joi from 'joi';

import { ExtraFieldDetail } from './ExtraFieldDetail';

export class SimplifiedExtraFieldDetail extends ExtraFieldDetail {
  public readonly name = 'Simplified';
  public readonly description = 'Simplified form of the term';
  public readonly kind = 'term';
  public readonly targetLanguageCodes = ['zh'];
  public readonly parseDirection = 'right';
  public readonly templateName = 'simplified';

  public readonly params = [
    {
      description: 'term',
      rule: Joi.string().required(),
      isSpeakable: false,
    },
  ];

  public readonly shortcodes = [
    {
      value: '[simplified: ]',
      cursor: 13,
    },
  ];
}
