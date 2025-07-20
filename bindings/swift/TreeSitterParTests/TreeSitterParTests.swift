import XCTest
import SwiftTreeSitter
import TreeSitterPar

final class TreeSitterParTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_par())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Par grammar")
    }
}
