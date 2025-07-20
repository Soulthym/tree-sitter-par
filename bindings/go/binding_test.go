package tree_sitter_par_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_par "github.com/soulthym/tree-sitter-par/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_par.Language())
	if language == nil {
		t.Errorf("Error loading Par grammar")
	}
}
