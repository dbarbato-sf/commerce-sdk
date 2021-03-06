/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as gulp from "gulp";
import {
  renderTemplates,
  renderOperationList,
  renderDocumentation
} from "../src/renderer";

require("dotenv").config();

import config from "../../../build-config";

/**
 *  Renders the TypeScript code for the APIs using the pre-defined templates
 */
gulp.task("renderTemplates", async () => renderTemplates(config));

/**
 * Renders the API documentation.
 */
gulp.task("renderDocumentation", async () => renderDocumentation(config));

/**
 * Renders an operation list file.
 */
gulp.task("renderOperationList", async () => renderOperationList(config));
