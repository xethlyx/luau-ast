export enum SyntaxKind {
	// indexable expressions
	Identifier,
	TemporaryIdentifier,
	ComputedIndexExpression,
	PropertyAccessExpression,
	CallExpression,
	MethodCallExpression,
	ParenthesizedExpression,

	// expressions
	None,
	NilLiteral,
	FalseLiteral,
	TrueLiteral,
	NumberLiteral,
	StringLiteral,
	VarArgsLiteral,
	FunctionExpression,
	BinaryExpression,
	UnaryExpression,
	IfExpression,
	InterpolatedString,
	Array,
	Map,
	Set,
	MixedTable,

	// statements
	Assignment,
	BreakStatement,
	CallStatement,
	ContinueStatement,
	DoStatement,
	WhileStatement,
	RepeatStatement,
	IfStatement,
	NumericForStatement,
	ForStatement,
	FunctionDeclaration,
	MethodDeclaration,
	VariableDeclaration,
	ReturnStatement,
	Comment,

	// types
	TypeIdentifier,
	TypeMixedTable,
	TypeMixedTableField,
	TypeMixedTableIndexedField,
	TypeFunction,
	TypeParameter,
	TypeTypeOf,
	TypeStatement,
	TypeCast,

	// fields
	MapField,
	InterpolatedStringPart,

	// used to detect what category a given kind falls into
	FirstIndexableExpression = Identifier,
	LastIndexableExpression = ParenthesizedExpression,
	FirstExpression = Identifier,
	LastExpression = MixedTable,
	FirstStatement = Assignment,
	LastStatement = Comment,
	FirstField = MapField,
	LastField = InterpolatedStringPart,
}
