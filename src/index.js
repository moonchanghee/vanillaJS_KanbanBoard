class Component {

    _Model;
    _View;

    constructor(target, model, view) {
        this._target = () => document.querySelector(target);
        this._model = model;
        this._view = view;
    }

}


class Model {
    _state;

    constructor(initialState) {
        this._state = initialState;
    }

}


class View {

    _target

    constructor(target) {
        this._target = () => document.querySelector(target);
    }
}


const component = new Component('#root', new Model({}), new View('#root'));