Polymer('taboo-app', {
  toggleOptions: function() {
    this.$.drawerPanel.togglePanel();
  },
  nextCard: function() {
    console.log('NEXT');
  }
});
