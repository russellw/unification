'use strict';

function unifyVar(a, b, m) {
}

// API

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

exports.unify = unify;
