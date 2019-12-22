/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ApiScope } from '../../enums/ApiScope';
import { Request } from './Request';

export interface GetApiKeyRequest extends Request {
  readonly path: '/get-api-key';
  readonly method: 'post';
  readonly authRequired: true;
  readonly query: null;
  readonly body: {
    password: string;
    apiScope: ApiScope;
    createIfNotExists?: boolean;
  };
}
