'use babel';

import Sbobetasia9View from './sbobetasia-9-view';
import { CompositeDisposable } from 'atom';

export default {

  sbobetasia9View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.sbobetasia9View = new Sbobetasia9View(state.sbobetasia9ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.sbobetasia9View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'sbobetasia-9:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.sbobetasia9View.destroy();
  },

  serialize() {
    return {
      sbobetasia9ViewState: this.sbobetasia9View.serialize()
    };
  },

  toggle() {
    console.log('Sbobetasia9 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
