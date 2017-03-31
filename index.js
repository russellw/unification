'use strict';

function unifyVar(a, b, m) {
	if (m.has(a)) {
		return unify(m.get(a), b, m);
	}
	if (m.has(b)) {
		return unify(a, m.get(b), m);
	}
	if (occurs(a, b, m)) {
		return false;
	}
	m.set(a, b);
	return true;
}

// API

function occurs(a, b, m) {
	if (a === b) {
		return true;
	}
	if (m.has(b)) {
		return occurs(a, m.get(b), m);
	}
	if (!b.args) {
		return false;
	}
	for (var x of b.args) {
		if (occurs(a, x, m)) {
			return true;
		}
	}
}

function unify(a, b, m) {
	if (a === b) {
		return true;
	}
	if (a.op === 'var') {
		return unifyVar(a, b, m);
	}
	if (b.op === 'var') {
		return unifyVar(b, a, m);
	}
	if (a.op !== b.op) {
		return false;
	}
	if (!a.args) {
		return a.val === b.val;
	}
	if (a.args.length !== b.args.length) {
		return false;
	}
	for (var i = 0; i < a.length; i++) {
		if (!unify(a.args[i], b.args[i], m)) {
			return false;
		}
	}
	return true;
}

exports.occurs = occurs;
exports.unify = unify;
