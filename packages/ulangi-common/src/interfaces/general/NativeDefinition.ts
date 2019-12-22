/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { WordClass } from '../../enums/WordClass';

export interface NativeDefinition {
  readonly meaning: string;
  readonly wordClasses: readonly WordClass[];
}
