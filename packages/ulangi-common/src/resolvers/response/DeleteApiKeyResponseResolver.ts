/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { AbstractResolver } from '@ulangi/resolver';
import * as Joi from 'joi';

import { DeleteApiKeyResponse } from '../../interfaces/response/DeleteApiKeyResponse';

export class DeleteApiKeyResponseResolver extends AbstractResolver<
  DeleteApiKeyResponse
> {
  protected rules = {
    success: Joi.boolean(),
  };
}
