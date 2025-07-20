/**
 * @file Par (⅋) is an experimental concurrent programming language. It's an attempt to bring the expressive power of linear logic into practice.
 * @author Thybault Alabarbe <thybault.alabarbe@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "par",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
