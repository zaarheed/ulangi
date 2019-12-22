/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { AbstractResolver } from '@ulangi/resolver';
import * as Joi from 'joi';

import { ChangePasswordResponse } from '../../interfaces/response/ChangePasswordResponse';

export class ChangePasswordResponseResolver extends AbstractResolver<
  ChangePasswordResponse
> {
  protected rules = {
    success: Joi.boolean().valid(true),
    accessToken: Joi.string().optional(),
  };
}
