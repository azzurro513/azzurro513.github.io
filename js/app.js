var app = new Vue({
  el: "#app",
  data:{
    status: true,
    selected: -1,
    selection: [
      "Sleep",
      "Feed",
      "Poop",
      "Pee"
    ],
    makerKey: "mrFP0_XKVHmOTtQyGFvlxyvL56b2LsfyVmzCNUG4z6J",
    makerEvent: "IoTButton"
  },
  methods:{
    buttonClick: function(){
      console.log("current selected:", this.selection[this.selected]);
      //this.status = ! this.status;
      axios.post("https://maker.ifttt.com/trigger/" + this.makerEvent + "/with/key/" + this.makerKey
, {value1: this.selected, value2: this.selection[this.selected]})
        .then(function(response){
          console.log(response);
        }).then(function(error){
          console.log(error);
        })
    },

  }
});
