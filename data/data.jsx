import { assignPullRequestsToFiles } from "../utilities/functions";

export const all_data = [
    {
        "filename": "README.md",
        "smellCount": 20,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/expr.out",
        "smellCount": 10,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype.c",
        "smellCount": 13,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_expr.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/expr.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "age--0.2.0.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/agtype.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_match.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/agtype.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_clause.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_match.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx_util.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_json.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "Makefile",
        "smellCount": 8,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonapi.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "analyze.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/ag_nodes.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_gram.y",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/ag_nodes.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_nodes.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/outfuncs.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_utils.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_set.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_remove.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_remove.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/cache/ag_cache.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_cache.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_label.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.0.0.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_create.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_graph.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_graph.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/catalog.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/catalog.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_label.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_catalog.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/label_commands.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/graph_commands.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_create.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "clang-format.5",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.1.0.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/cypher.xml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/Cypher.g4",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/start.xml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/pre-parser.xml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/commands.xml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/basic-grammar.xml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "openCypher/openCypher9.pdf",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_catalog.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/utility-functions.rst",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/agensgraph.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_path.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/expr.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/agtype.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/agtype.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype_ops.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/expr.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.y",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_nodes.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "outfuncs.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "nodes.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "nodes.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_node.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_node.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": ".asf.yaml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/commands/label_commands.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_parser.h",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype.h",
        "smellCount": 13,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_parser.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_util.c",
        "smellCount": 13,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/ag_func.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_func.h",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_namespace.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_namespace.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_with.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_create.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_with.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_create.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/scan.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "age.control",
        "smellCount": 8,
        "__typename": "File"
    },
    {
        "filename": "doc/conf.py",
        "smellCount": 8,
        "__typename": "File"
    },
    {
        "filename": "age--0.1.0.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "scan.l",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "scan.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "commands.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/scan.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parser.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_analyze.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/graphid.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/commands.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/.gitignore",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": ".travis.yml",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": ".gitignore",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "sql/commands.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/commands.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "analyze.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/cypher-query-language.rst",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/tables.rst",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/installation.rst",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/index.rst",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ext.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/scan.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_with.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/scan.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_with.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/AgensGraph_BI.png",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/Makefile",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/.gitignore",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.control",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ops.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_create.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_createplan.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/graphid.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/graphid.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/graphid.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_plan.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_paths.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_path.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_pathnode.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_plan.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_executor.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_execnodes.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_pathnode.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_paths.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_createplan.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/commands.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/commands.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_clause.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/cypher_funcs.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_keywords.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/ag_float8_supp.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/ag_scanner.l",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_item.c",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_set.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_set.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_utils.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "tools/git/commit-msg",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/ag_scanner.h",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "sql/jsonbx.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "expected/jsonbx.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/drop.out",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/drop.sql",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/age_BI.png",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype_util.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/.gitignore",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "graphid.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/.gitignore",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "graphid.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_keywords.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parser.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_gram.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_expr.h",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_item.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_ext.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_analyze.h",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "LICENSE",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/backend/age.c",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_float8_supp.h",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "NOTICE",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "RELEASE",
        "smellCount": 7,
        "__typename": "File"
    },
    {
        "filename": "age--0.3.0.sql",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER-WIP",
        "smellCount": 6,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_agg.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_agg.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "age--0.6.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/age_vle.c",
        "smellCount": 4,
        "__typename": "File"
    }
];

export const lack_cr_data = [
    {
        "filename": "README.md",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/expr.out",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype.c",
        "smellCount": 4,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_expr.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/expr.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age--0.2.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/agtype.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_match.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/agtype.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_clause.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_match.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_json.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "Makefile",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonapi.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "analyze.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/ag_nodes.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_gram.y",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/ag_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/outfuncs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_utils.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_set.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_remove.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_remove.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/cache/ag_cache.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_cache.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_label.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.0.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_create.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_graph.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_graph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/catalog.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/catalog.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_label.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_catalog.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/label_commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/graph_commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_create.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "clang-format.5",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.1.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/cypher.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/Cypher.g4",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/start.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/pre-parser.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/commands.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/basic-grammar.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/openCypher9.pdf",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_catalog.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/utility-functions.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/agensgraph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_path.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/expr.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/agtype.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/agtype.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ops.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/expr.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.y",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "outfuncs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "nodes.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_node.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_node.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": ".asf.yaml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/commands/label_commands.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_parser.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype.h",
        "smellCount": 4,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_parser.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_util.c",
        "smellCount": 4,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/ag_func.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_func.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_namespace.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_namespace.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_with.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_create.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_with.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_create.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/scan.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age.control",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "doc/conf.py",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "age--0.1.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "scan.l",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "scan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/scan.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_analyze.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/graphid.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".travis.yml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/commands.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/commands.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "analyze.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/cypher-query-language.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/tables.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/installation.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/index.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ext.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/scan.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_with.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/scan.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_with.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/AgensGraph_BI.png",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/Makefile",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.control",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ops.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_create.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_createplan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/graphid.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/graphid.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/graphid.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_plan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_paths.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_path.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_pathnode.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_plan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_executor.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_execnodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_pathnode.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_paths.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_createplan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/commands.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/commands.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_clause.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/cypher_funcs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_keywords.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/ag_float8_supp.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/ag_scanner.l",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_item.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_set.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_set.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_utils.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "tools/git/commit-msg",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/ag_scanner.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "sql/jsonbx.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/jsonbx.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/drop.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/drop.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/age_BI.png",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "graphid.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "graphid.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_keywords.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_gram.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_expr.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_item.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_ext.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_analyze.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "LICENSE",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/age.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_float8_supp.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "NOTICE",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "RELEASE",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "age--0.3.0.sql",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER-WIP",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_agg.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_agg.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "age--0.6.0.sql",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/age_vle.c",
        "smellCount": 1,
        "__typename": "File"
    }
];

export const large_changet_data = [
    {
        "filename": "NOTICE",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER-WIP",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_item.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_parser.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_agg.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_clause.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_expr.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_utils.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_expr.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_node.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/ag_scanner.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_func.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_parser.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_keywords.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/ag_float8_supp.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/ag_func.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_float8_supp.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_agg.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/age_vle.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/expr.out",
        "smellCount": 1,
        "__typename": "File"
    }
];

export const missing_context_data = [
    {
        "filename": "README.md",
        "smellCount": 9,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/expr.out",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype.c",
        "smellCount": 4,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_expr.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/expr.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age--0.2.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/agtype.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_match.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/agtype.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_clause.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_match.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_json.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "Makefile",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonapi.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "analyze.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/ag_nodes.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_gram.y",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/ag_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/outfuncs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_utils.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_set.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_remove.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_remove.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/cache/ag_cache.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_cache.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_label.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.0.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_create.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_graph.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_graph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/catalog.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/catalog.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_label.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_catalog.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/label_commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/graph_commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_create.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "clang-format.5",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.1.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/cypher.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/Cypher.g4",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/start.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/pre-parser.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/commands.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/basic-grammar.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/openCypher9.pdf",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_catalog.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/utility-functions.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/agensgraph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_path.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/expr.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/agtype.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/agtype.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ops.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/expr.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.y",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "outfuncs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "nodes.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_node.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_node.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": ".asf.yaml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/commands/label_commands.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_parser.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype.h",
        "smellCount": 4,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_parser.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_util.c",
        "smellCount": 4,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/ag_func.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_func.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_namespace.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_namespace.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_with.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_create.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_with.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_create.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/scan.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age.control",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "doc/conf.py",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "age--0.1.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "scan.l",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "scan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/scan.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_analyze.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/graphid.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".travis.yml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/commands.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/commands.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "analyze.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/cypher-query-language.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/tables.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/installation.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/index.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ext.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/scan.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_with.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/scan.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_with.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/AgensGraph_BI.png",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/Makefile",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.control",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ops.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_create.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_createplan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/graphid.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/graphid.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/graphid.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_plan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_paths.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_path.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_pathnode.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_plan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_executor.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_execnodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_pathnode.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_paths.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_createplan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/commands.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/commands.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_clause.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/cypher_funcs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_keywords.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/ag_float8_supp.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/ag_scanner.l",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_item.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_set.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_set.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_utils.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "tools/git/commit-msg",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/ag_scanner.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "sql/jsonbx.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/jsonbx.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/drop.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/drop.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/age_BI.png",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "graphid.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "graphid.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_keywords.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_gram.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_expr.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_item.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_ext.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_analyze.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "LICENSE",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/age.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_float8_supp.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "NOTICE",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "RELEASE",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "age--0.3.0.sql",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER-WIP",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_agg.c",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_agg.h",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "age--0.6.0.sql",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/age_vle.c",
        "smellCount": 1,
        "__typename": "File"
    }
];

export const ping_pong_data = [];

export const sleeping_review_data = [
    {
        "filename": "README.md",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/expr.out",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_expr.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/expr.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age--0.2.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/agtype.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_match.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/agtype.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_clause.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_match.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_json.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "Makefile",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_extended_type.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonbx.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_jsonapi.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "analyze.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/ag_nodes.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_gram.y",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/ag_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/nodes/outfuncs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_utils.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_set.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_remove.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_remove.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/cache/ag_cache.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_cache.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_label.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.0.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_create.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_graph.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_graph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/catalog.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/catalog.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_label.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_catalog.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/label_commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/graph_commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_create.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "clang-format.5",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph--0.1.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/cypher.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/Cypher.g4",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/start.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/pre-parser.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/commands.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/M13/basic-grammar.xml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "openCypher/openCypher9.pdf",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_catalog.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/utility-functions.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/agensgraph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_path.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/expr.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/agtype.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/agtype.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ops.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/expr.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.y",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "outfuncs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "nodes.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "nodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parse_node.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parse_node.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".asf.yaml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/commands/label_commands.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype.h",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_util.c",
        "smellCount": 3,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/ag_func.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_func.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/catalog/ag_namespace.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/catalog/ag_namespace.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_with.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_create.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/cypher_with.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/cypher_create.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/scan.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age.control",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/conf.py",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "age--0.1.0.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "scan.l",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "scan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_graph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/scan.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_analyze.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/graphid.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/commands/commands.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".travis.yml",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": ".gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/commands.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/commands.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "analyze.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_path.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/cypher-query-language.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/tables.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/installation.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/index.rst",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ext.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/scan.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_with.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/scan.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_with.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/AgensGraph_BI.png",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/Makefile",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agensgraph.control",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_scan_state.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/agtype_ops.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/executor/cypher_create.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_createplan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/graphid.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/graphid.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/graphid.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_plan.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_paths.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_path.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/optimizer/cypher_pathnode.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_plan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_executor.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/nodes/cypher_execnodes.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_pathnode.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_paths.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/optimizer/cypher_createplan.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "ag_catalog.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/commands.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/commands.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_clause.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/cypher_funcs.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_keywords.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/ag_float8_supp.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/ag_scanner.l",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/cypher_item.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/cypher_set.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/cypher_set.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/executor/cypher_utils.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "tools/git/commit-msg",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/ag_scanner.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "sql/jsonbx.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "expected/jsonbx.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/expected/drop.out",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "regress/sql/drop.sql",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "doc/_static/age_BI.png",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_util.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_keywords.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_ext.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_clause.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "agtype_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/parser/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "graphid.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/.gitignore",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_gram.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_expr.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "cypher_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "graphid.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_keywords.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_parser.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_gram.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_expr.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_item.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/agtype_ext.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/parser/cypher_analyze.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "LICENSE",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/backend/age.c",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "src/include/utils/ag_float8_supp.h",
        "smellCount": 2,
        "__typename": "File"
    },
    {
        "filename": "NOTICE",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "RELEASE",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "age--0.3.0.sql",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "DISCLAIMER-WIP",
        "smellCount": 1,
        "__typename": "File"
    },
    {
        "filename": "src/backend/utils/adt/age_vle.c",
        "smellCount": 1,
        "__typename": "File"
    }
];

export const pullRequestData =[
        {
        "artifactId": 2,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-08 09:01:24+00:00",
        "mergedAt": "2021-01-08 21:47:43+00:00"
    },
    {
        "artifactId": 3,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-11 06:49:24+00:00",
        "mergedAt": "2021-01-11 14:21:55+00:00"
    },
    {
        "artifactId": 8,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-12 23:54:24+00:00",
        "mergedAt": "2021-01-13 00:10:27+00:00"
    },
    {
        "artifactId": 7,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-12 23:49:18+00:00",
        "mergedAt": "2021-01-13 00:10:49+00:00"
    },
    {
        "artifactId": 9,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-13 00:18:00+00:00",
        "mergedAt": "2021-01-13 00:18:51+00:00"
    },
    {
        "artifactId": 12,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Changhyun.Kim",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 12088
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        2
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-13 06:07:30+00:00",
        "mergedAt": "2021-01-21 15:35:35+00:00"
    },
    {
        "artifactId": 11,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "mintduck",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 12141
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-13 05:13:53+00:00",
        "mergedAt": "2021-01-21 15:35:52+00:00"
    },
    {
        "artifactId": 16,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-02-02 04:53:25+00:00",
        "mergedAt": "2021-02-02 05:01:12+00:00"
    },
    {
        "artifactId": 17,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-02-02 05:02:16+00:00",
        "mergedAt": "2021-02-04 04:47:45+00:00"
    },
    {
        "artifactId": 10,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Hyundong-Seo",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 40073
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-13 01:01:53+00:00",
        "mergedAt": "2021-02-09 20:55:35+00:00"
    },
    {
        "artifactId": 18,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Kevin H. Lee",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 8166
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-02-04 04:49:18+00:00",
        "mergedAt": "2021-02-09 20:55:35+00:00"
    },
    {
        "artifactId": 19,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-02-10 03:46:06+00:00",
        "mergedAt": "2021-02-10 20:28:32+00:00"
    },
    {
        "artifactId": 21,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-02-16 14:53:15+00:00",
        "mergedAt": "2021-02-16 22:08:42+00:00"
    },
    {
        "artifactId": 22,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-02-17 04:17:00+00:00",
        "mergedAt": "2021-02-17 19:27:02+00:00"
    },
    {
        "artifactId": 37,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-03-09 01:17:39+00:00",
        "mergedAt": "2021-03-09 01:54:13+00:00"
    },
    {
        "artifactId": 4,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-12 02:54:54+00:00",
        "mergedAt": "2021-01-12 05:09:54+00:00"
    },
    {
        "artifactId": 5,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-12 05:11:44+00:00",
        "mergedAt": "2021-01-12 05:18:08+00:00"
    },
    {
        "artifactId": 6,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-12 05:20:02+00:00",
        "mergedAt": "2021-01-12 23:05:14+00:00"
    },
    {
        "artifactId": 1,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-01-07 10:41:30+00:00",
        "mergedAt": "2021-01-08 02:53:34+00:00"
    },
    {
        "artifactId": 38,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Andrew Ko",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 4195
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-03-09 04:44:56+00:00",
        "mergedAt": "2021-03-12 02:40:46+00:00"
    },
    {
        "artifactId": 51,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Hanbyeol Shin / \uc2e0\ud55c\ubcc4",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 5502
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-04-09 03:41:18+00:00",
        "mergedAt": "2021-04-12 23:23:38+00:00"
    },
    {
        "artifactId": 63,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 17004
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 2162
                }
            }
        ],
        "createdAt": "2021-05-06 04:30:43+00:00",
        "mergedAt": "2021-05-17 23:55:21+00:00"
    },
    {
        "artifactId": 68,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 6822
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 3026
                }
            }
        ],
        "createdAt": "2021-05-13 06:13:31+00:00",
        "mergedAt": "2021-05-17 23:56:03+00:00"
    },
    {
        "artifactId": 77,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 848
                }
            }
        ],
        "createdAt": "2021-06-03 00:16:28+00:00",
        "mergedAt": "2021-06-03 00:35:05+00:00"
    },
    {
        "artifactId": 83,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "joefagan",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 29268
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-06-08 08:36:44+00:00",
        "mergedAt": "2021-06-28 16:25:03+00:00"
    },
    {
        "artifactId": 46,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "mintduck",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 147702
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-03-18 09:54:24+00:00",
        "mergedAt": "2021-06-28 23:36:46+00:00"
    },
    {
        "artifactId": 40,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "mintduck",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 160897
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-03-09 05:59:59+00:00",
        "mergedAt": "2021-06-28 23:37:03+00:00"
    },
    {
        "artifactId": 27,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Hanbyeol Shin / \uc2e0\ud55c\ubcc4",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 186983
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        2
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 11760
                }
            }
        ],
        "createdAt": "2021-02-19 03:16:27+00:00",
        "mergedAt": "2021-06-28 23:39:27+00:00"
    },
    {
        "artifactId": 86,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [
                        "dehowef"
                    ],
                    "durationUntilFirstReview": 67416,
                    "totalDuration": 67416
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-06-18 01:52:33+00:00",
        "mergedAt": "2021-08-03 21:29:23+00:00"
    },
    {
        "artifactId": 99,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-08-02 02:54:51+00:00",
        "mergedAt": "2021-08-03 21:51:01+00:00"
    },
    {
        "artifactId": 112,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-09-02 00:39:44+00:00",
        "mergedAt": "2021-09-02 00:51:23+00:00"
    },
    {
        "artifactId": 96,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Dan Caron",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 55052
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-07-27 18:32:38+00:00",
        "mergedAt": "2021-09-04 00:05:22+00:00"
    },
    {
        "artifactId": 114,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-09-08 23:27:13+00:00",
        "mergedAt": "2021-09-09 19:02:29+00:00"
    },
    {
        "artifactId": 116,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Pieterjan De Potter",
                    "reviewers": [
                        "Alex Kwak"
                    ],
                    "durationUntilFirstReview": 1,
                    "totalDuration": 7762
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-09-10 06:35:21+00:00",
        "mergedAt": "2021-09-15 15:57:40+00:00"
    },
    {
        "artifactId": 115,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Shoaib",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 27743
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-09-09 13:02:18+00:00",
        "mergedAt": "2021-09-28 19:25:50+00:00"
    },
    {
        "artifactId": 120,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-09-28 00:40:32+00:00",
        "mergedAt": "2021-09-29 14:05:12+00:00"
    },
    {
        "artifactId": 111,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-08-31 10:03:54+00:00",
        "mergedAt": "2021-08-31 23:56:17+00:00"
    },
    {
        "artifactId": 124,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-10-01 05:07:39+00:00",
        "mergedAt": "2021-10-01 20:16:25+00:00"
    },
    {
        "artifactId": 125,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 1255
                }
            }
        ],
        "createdAt": "2021-10-07 14:12:25+00:00",
        "mergedAt": "2021-10-07 14:25:33+00:00"
    },
    {
        "artifactId": 128,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-10-08 10:56:24+00:00",
        "mergedAt": "2021-10-08 20:20:10+00:00"
    },
    {
        "artifactId": 134,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-10-27 09:09:17+00:00",
        "mergedAt": "2021-10-28 19:59:16+00:00"
    },
    {
        "artifactId": 82,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Dmitriy Dorofeev",
                    "reviewers": [
                        "Shoaib"
                    ],
                    "durationUntilFirstReview": 215471,
                    "totalDuration": 221531
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-06-07 20:41:28+00:00",
        "mergedAt": "2021-11-08 16:53:12+00:00"
    },
    {
        "artifactId": 31,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Hyundong-Seo",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 391339
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-03-03 07:22:05+00:00",
        "mergedAt": "2021-11-30 01:41:36+00:00"
    },
    {
        "artifactId": 78,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "seo-kw",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 259245
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 1570
                }
            }
        ],
        "createdAt": "2021-06-03 00:56:33+00:00",
        "mergedAt": "2021-11-30 01:41:54+00:00"
    },
    {
        "artifactId": 123,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Quoc Viet Vuong",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 87959
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-09-30 03:00:29+00:00",
        "mergedAt": "2021-11-30 04:59:30+00:00"
    },
    {
        "artifactId": 90,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 228633
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0,
                        1
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-06-25 01:45:50+00:00",
        "mergedAt": "2021-11-30 20:18:57+00:00"
    },
    {
        "artifactId": 104,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 160567
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-08-11 08:14:38+00:00",
        "mergedAt": "2021-11-30 20:21:59+00:00"
    },
    {
        "artifactId": 136,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Shoaib",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 40231
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-11-02 22:05:04+00:00",
        "mergedAt": "2021-11-30 20:36:44+00:00"
    },
    {
        "artifactId": 87,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Rhizome",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 234545
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 8272
                }
            }
        ],
        "createdAt": "2021-06-21 01:11:13+00:00",
        "mergedAt": "2021-11-30 22:16:52+00:00"
    },
    {
        "artifactId": 141,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [
                        "Josh Innis"
                    ],
                    "durationUntilFirstReview": 19701,
                    "totalDuration": 19703
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-11-17 06:12:57+00:00",
        "mergedAt": "2021-11-30 22:36:09+00:00"
    },
    {
        "artifactId": 146,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Quoc Viet Vuong",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 10673
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-11-23 10:33:54+00:00",
        "mergedAt": "2021-11-30 20:27:30+00:00"
    },
    {
        "artifactId": 126,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Shoaib",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 79328
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 1467
                }
            }
        ],
        "createdAt": "2021-10-07 14:27:29+00:00",
        "mergedAt": "2021-12-01 16:36:25+00:00"
    },
    {
        "artifactId": 157,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 672
                }
            }
        ],
        "createdAt": "2021-12-10 21:59:20+00:00",
        "mergedAt": "2021-12-10 22:44:51+00:00"
    },
    {
        "artifactId": 163,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-20 08:04:13+00:00",
        "mergedAt": "2021-12-21 23:30:41+00:00"
    },
    {
        "artifactId": 159,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Quoc Viet Vuong",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 8085
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-16 09:21:32+00:00",
        "mergedAt": "2021-12-22 00:06:47+00:00"
    },
    {
        "artifactId": 165,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-21 06:30:59+00:00",
        "mergedAt": "2021-12-22 00:09:48+00:00"
    },
    {
        "artifactId": 107,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [
                        "John Gemignani"
                    ],
                    "durationUntilFirstReview": 178845,
                    "totalDuration": 178846
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-08-19 20:22:29+00:00",
        "mergedAt": "2021-12-22 01:08:43+00:00"
    },
    {
        "artifactId": 167,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-22 09:26:32+00:00",
        "mergedAt": "2021-12-22 19:45:53+00:00"
    },
    {
        "artifactId": 169,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-23 14:10:33+00:00",
        "mergedAt": "2021-12-23 16:54:44+00:00"
    },
    {
        "artifactId": 170,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-29 14:58:20+00:00",
        "mergedAt": "2021-12-30 01:51:51+00:00"
    },
    {
        "artifactId": 164,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "joefagan",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 21473
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-20 20:16:35+00:00",
        "mergedAt": "2022-01-04 18:09:53+00:00"
    },
    {
        "artifactId": 150,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Rhizome",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 51308
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 4092
                }
            }
        ],
        "createdAt": "2021-12-02 06:40:58+00:00",
        "mergedAt": "2022-01-06 21:49:24+00:00"
    },
    {
        "artifactId": 174,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-14 00:32:31+00:00",
        "mergedAt": "2022-01-14 01:25:10+00:00"
    },
    {
        "artifactId": 149,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 71332
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-01 13:59:23+00:00",
        "mergedAt": "2022-01-20 02:51:59+00:00"
    },
    {
        "artifactId": 177,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-21 04:18:08+00:00",
        "mergedAt": "2022-01-21 17:10:36+00:00"
    },
    {
        "artifactId": 168,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Pieterjan De Potter",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 42131
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 1141
                }
            }
        ],
        "createdAt": "2021-12-23 14:10:05+00:00",
        "mergedAt": "2022-01-21 20:21:24+00:00"
    },
    {
        "artifactId": 178,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-22 13:52:49+00:00",
        "mergedAt": "2022-01-24 08:19:47+00:00"
    },
    {
        "artifactId": 171,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "joefagan",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 28536
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-04 19:49:44+00:00",
        "mergedAt": "2022-01-24 15:25:59+00:00"
    },
    {
        "artifactId": 173,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [
                        "John Gemignani"
                    ],
                    "durationUntilFirstReview": 12668,
                    "totalDuration": 18399
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-13 05:39:57+00:00",
        "mergedAt": "2022-01-26 00:19:21+00:00"
    },
    {
        "artifactId": 175,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Alex Kwak",
                    "reviewers": [
                        "John Gemignani"
                    ],
                    "durationUntilFirstReview": 1070,
                    "totalDuration": 8552
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-20 03:14:28+00:00",
        "mergedAt": "2022-01-26 01:46:44+00:00"
    },
    {
        "artifactId": 166,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2021-12-21 07:47:34+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 155,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": false,
                "details": null
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Shoaib",
                    "reviewers": [
                        "John Gemignani"
                    ],
                    "durationUntilFirstReview": 25208,
                    "totalDuration": 73729
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 146935
                }
            }
        ],
        "createdAt": "2021-12-06 13:11:23+00:00",
        "mergedAt": "2022-01-26 18:01:19+00:00"
    },
    {
        "artifactId": 181,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-01-27 07:19:47+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 184,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-02-11 05:01:37+00:00",
        "mergedAt": "2022-02-11 05:04:59+00:00"
    },
    {
        "artifactId": 185,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-02-11 05:05:11+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 188,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Shoaib",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 17392
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 760
                }
            }
        ],
        "createdAt": "2022-02-18 17:17:36+00:00",
        "mergedAt": "2022-03-02 19:09:45+00:00"
    },
    {
        "artifactId": 191,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-03-04 16:45:18+00:00",
        "mergedAt": "2022-03-04 23:05:50+00:00"
    },
    {
        "artifactId": 192,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-03-08 03:38:41+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 190,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": true,
                "details": {
                    "author": "Quoc Viet Vuong",
                    "reviewers": [],
                    "durationUntilFirstReview": null,
                    "totalDuration": 8031
                }
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-03-03 02:54:31+00:00",
        "mergedAt": "2022-03-08 16:45:47+00:00"
    },
    {
        "artifactId": 193,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": false,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 611
                }
            }
        ],
        "createdAt": "2022-03-08 06:30:57+00:00",
        "mergedAt": "2022-03-09 08:34:03+00:00"
    },
    {
        "artifactId": 194,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": true,
                "details": {
                    "lineCount": 611
                }
            }
        ],
        "createdAt": "2022-03-09 08:37:02+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 196,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-03-10 03:23:00+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 197,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-03-12 19:34:57+00:00",
        "mergedAt": "None"
    },
    {
        "artifactId": 201,
        "smells": [
            {
                "name": "lack-of-code-review",
                "result": true,
                "details": {
                    "encoding": 0
                }
            },
            {
                "name": "ping-pong",
                "result": false,
                "details": null
            },
            {
                "name": "sleeping-reviews",
                "result": null,
                "details": null
            },
            {
                "name": "missing-context",
                "result": true,
                "details": {
                    "encodings": [
                        0
                    ]
                }
            },
            {
                "name": "large-changeset",
                "result": false,
                "details": null
            }
        ],
        "createdAt": "2022-03-18 13:54:15+00:00",
        "mergedAt": "None"
    }
]

export const smellCountByDeveloperLackofCodeReview = {
        "x": [
          "Alex Kwak",
          "Andrew Ko",
          "Quoc Viet Vuong",
          "Shoaib",
          "Kevin H. Lee",
          "joefagan",
          "Hanbyeol Shin / 신한별",
          "mintduck",
          "Pieterjan De Potter",
          "seo-kw",
          "Rhizome",
          "Hyundong-Seo",
          "Spes Lim",
          "Josh Innis",
          "Dmitriy Dorofeev",
          "Hyunwoo Ha",
          "Changhyun.Kim",
          "dehowef",
          "Dan Caron",
          "0xflotus",
          "Nick Sorrell"
        ],
        "y": [
          17,
          8,
          7,
          6,
          5,
          3,
          3,
          3,
          2,
          2,
          2,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "__typename": "Metric"
      }

export const smellCountByDeveloperLargeChangeset = {
        "x": [
          "Alex Kwak",
          "Shoaib",
          "seo-kw",
          "Rhizome",
          "Pieterjan De Potter",
          "Josh Innis",
          "Hanbyeol Shin / 신한별"
        ],
        "y": [
          4,
          4,
          2,
          2,
          1,
          1,
          1
        ],
        "__typename": "Metric"
}

export const smellCountByDeveloperMissingContext = {
        "x": [
          "Alex Kwak",
          "Andrew Ko",
          "Shoaib",
          "Quoc Viet Vuong",
          "Pieterjan De Potter",
          "Kevin H. Lee",
          "joefagan",
          "Hanbyeol Shin / 신한별",
          "mintduck",
          "seo-kw",
          "Dmitriy Dorofeev",
          "Rhizome",
          "Hyundong-Seo",
          "Spes Lim",
          "Josh Innis",
          "Hyunwoo Ha",
          "Changhyun.Kim",
          "dehowef",
          "Dan Caron",
          "0xflotus",
          "Nick Sorrell"
        ],
        "y": [
          24,
          8,
          8,
          8,
          5,
          5,
          3,
          3,
          3,
          2,
          2,
          2,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "__typename": "Metric"
}

export const smellCountByDeveloperSleepingReview = {
        "x": [
          "Alex Kwak",
          "Shoaib",
          "Quoc Viet Vuong",
          "joefagan",
          "mintduck",
          "Pieterjan De Potter",
          "Rhizome",
          "Hanbyeol Shin / 신한별",
          "Hyundong-Seo",
          "Andrew Ko",
          "seo-kw",
          "Dmitriy Dorofeev",
          "Kevin H. Lee",
          "Changhyun.Kim",
          "Dan Caron"
        ],
        "y": [
          10,
          5,
          4,
          3,
          3,
          2,
          2,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "__typename": "Metric"
    }

export const pullRequestSmell =  assignPullRequestsToFiles();
