/*
This first instruction creates an event emitter and listener that operates at 
the base Vue level.
*/

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
      this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

/* 
NEXT UP
*/
Vue.component('sidebar', {
  template: `
    <div class="sidebar">
      <b>The goal is to brainstorm the thing.</b><br><br>
       <div class="demo">
        <div v-for="item in list" id="demo">{{item.name}}</span><br>
      </div>
    </div> `,

  data() {
    return { 
      list: [],
      results: []
    };
  },

  created () {
    Event.listen('thingHasChanged', (ideas) => {
      this.list = ideas;

      // var simple = []
      // ideas.forEach((i) => {
      //   simple.push(i.name);
      // });


      // for (var i = 0; i < simple.length - 1; i++) {
      //   for (var j = i + 1; j < simple.length; j++) {
      //     this.results.push(`${simple[i]} ${simple[j]}`);
      //   }
      // } 

      // console.log(this.results);
    });
  },

  /*
  Can I run this combinate() function on this.list

  computed() {
    combinate() {
      for (var i = 0; i < this.list.length - 1; i++) {
       for (var j = i + 1; j < this.list.length; j++) {
         return this.results.push(`${this.list[i]} ${this.list[j]}`);
       }
      }
    }
  }
  */
});


Vue.component('idea-list', {
  template: `
    <div>    
      <idea v-for="(idea, index) in ideas" :data-index="index" :key="index">
        <input class="list" v-model="idea.name" @keyup.enter="addIdea()"></input>
      </idea>
    </div>
    `,

  data() {
    return { 
      ideas: [ {name:''} ],
    }; 
  }, 
  
  watch: {
    ideas: function () {
          Event.fire('thingHasChanged', this.ideas);
      }
  },

  methods: {
    addIdea() {
      /* How do I add only if the field had content in it? */
      this.ideas.push( {name:''} )
    }
  } 
});

Vue.component('idea', {
  template: '<li class="idea"><slot></slot></li>'
});


var app = new Vue ({
  el: '#root',

  // calculated: {
  //   listOne : listOne.value.split('\n'); //create array of strings
  //   listOne : listOne.filter(function(str) {
  //   return /\S/.test(str);
  // }
  
});

    // var listOne = [4,1,1];
   
    // function sortInput(){
    //   var listOne = document.getElementById('listOne');

    //   var listTwo = document.getElementById('listTwo');
    //   listTwo = listTwo.value.split('\n'); //create array of strings
    //   listTwo = listTwo.filter(function(str) {
    //     return /\S/.test(str);
    //   });

    //   var listThree = document.getElementById('listThree');
    //   listThree = listThree.value.split('\n'); //create array of strings
    //   listThree = listThree.filter(function(str) {
    //     return /\S/.test(str);
    //   });

    //   var arraysToCombine = [listOne, listTwo, listThree];

    //    var getAllCombinations = function(arraysToCombine) {
    //   var divisors = [];
    //   for (var i = arraysToCombine.length - 1; i >= 0; i--) {
    //      divisors[i] = divisors[i + 1] ? divisors[i + 1] * arraysToCombine[i + 1].length : 1;
    //   }
      
    //   function getPermutation(n, arraysToCombine) {
    //      var result = [], 
    //          curArray;    
    //      for (var i = 0; i < arraysToCombine.length; i++) {
    //         curArray = arraysToCombine[i];
    //         result.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
    //      }    
    //      return result;
    //   }

    //   var numPerms = arraysToCombine[0].length;
    //   for(var i = 1; i < arraysToCombine.length; i++) {
    //       numPerms *= arraysToCombine[i].length;
    //   }
      
    //   var combinations = [];
    //   for(var i = 0; i < numPerms; i++) {
    //       combinations.push(getPermutation(i, arraysToCombine));
    //   }
    //   return combinations;
    //   }
    //   var parentArray = (getAllCombinations(arraysToCombine));

    //   var printArray = function(arr) {
    //   if ( typeof(arr) == "object") {
    //       for (var i = 0; i < arr.length; i++) {
    //           printArray(arr[i]+"<br>");
    //       }
    //   }
    //   else document.write(arr);
    //   }

    //   // var merged = [].concat.apply([], parentArray);
    //   document.getElementById("demo").innerHTML = parentArray.length+" Permutations<br><br>" + parentArray.join("<br>");
    // }