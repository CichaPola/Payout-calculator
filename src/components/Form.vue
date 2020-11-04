<template>
  <div id="mainContainer">
    <b-container id="leftContainer">
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="statisticalNum">Numer statystyczny:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`statisticalNum`" type="text" v-model="statisticalNum" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="`month`">Miesiąc:</label>
        </b-col>
        <b-col sm="5">
          <b-form-select :id="`month`" v-model="month" :options="options"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="name">Imię i nazwisko kierowcy:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`name`" type="text" v-model="name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="exchangeRate">kurs euro:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`exchangeRate`" type="number"  step="0.01" v-model="exchangeRate"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="delegationType">Typ delegacji:</label>
        </b-col>
        <b-col sm="5">
          <b-form-radio v-model="delegationType" name="delegationType" value="Krajowa">Krajowa</b-form-radio>
          <b-form-radio v-model="delegationType" name="delegationType" value="Międzynarodowa">Międzynarodowa</b-form-radio>
        </b-col>
      </b-row>

      <h3 id="kilometersTitle">Kilometry</h3>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="kilometers">Ilość kilometrów:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`kilometers`" type="number" v-model="kilometers"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="rate">Stawka za kilometr (zł):</label>
        </b-col>
        <b-col sm="5">
          <b-form-select :id="`rate`" v-model="rate" :options="rateArr"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label class="total" :for="total1zl">Do wypłaty (zł):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`total1zl`" type="number" v-model="total1zl" disabled></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label class="total" :for="`total1euro`">Do wypłaty (€):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`total1euro`" type="number" v-model="total1euro" disabled></b-form-input>
        </b-col>
      </b-row>

      <h3 id="internal">Diety</h3>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="days">Ilość dni:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`days`" type="number" v-model="days"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="`layover`">Przestoje:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`layover`" type="number" v-model="layover" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="`hours`">Godziny (1h):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`hours`" type="number" v-model="hours"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label class="total" :for="`total2zl`">Do wypłaty (zł):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`total2zl`" type="number" disabled v-model="total2zl"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label class="total" :for="`total2euro`">Do wypłaty (€):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`total2euro`" type="number" disabled v-model="total2euro"></b-form-input>
        </b-col>
      </b-row>
    </b-container>

    <b-container id="rightContainer">
      <h3>Obciążenia/Bonusy</h3>
      <b-row class="my-1">
          <b-col sm="3">
            <label >Typ: </label>
          </b-col>
          <b-col sm="5">
            <b-form-radio v-model="charge.type" name="type" value="decrease">Zmniejszenie</b-form-radio>
            <b-form-radio v-model="charge.type" name="type" value="increase">Zwiększenie</b-form-radio>
          </b-col>
      </b-row>
      <b-row class="my-1">
          <b-col sm="3">
            <label :for="`chargeTitle`">Tytuł: </label>
          </b-col>
          <b-col sm="5">
            <b-form-input :id="`chargeTitle`" type="text" v-model="charge.title"></b-form-input>
          </b-col>
      </b-row>
      <b-row class="my-1">
          <b-col sm="3">
            <label :for="`chargeAmount`">Kwota: </label>
          </b-col>
          <b-col sm="5">
            <b-form-input :id="`chargeAmount`" type="number" v-model="charge.amount" ></b-form-input>
          </b-col>   
      </b-row>
      <b-row class="my-1">
          <b-col sm="3">
            <label >Waluta: </label>
          </b-col>
          <b-col sm="5">
            <b-form-radio v-model="charge.currency" name="currency" value="PLN">PLN</b-form-radio>
            <b-form-radio v-model="charge.currency" name="currency" value="EUR">EUR</b-form-radio>
          </b-col>   
      </b-row>
      <b-button id="addBtn" variant="info" @click="addCharge()">Dodaj</b-button>
      <b-button v-if="chargeArray.length" id="removeBtn" variant="info" @click="removeCharge()">Usuń zaznaczone</b-button>

      <b-table
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        :items="chargeArray"
        :fields="fields"
        :select-mode="selectMode"
        head-variant=light
        v-if="chargeArray.length"
      >
        <template v-slot:cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>

      </b-table>
      <b-row class="my-1">
        <b-col sm="3">
          <label class="total" id="total3label" :for="`total3zl`">Do wypłaty na konto (zł):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`total3zl`" type="number" disabled v-model="total3zl"></b-form-input>
        </b-col>
      </b-row>
            <b-row class="my-1">
        <b-col sm="3">
          <label class="total" id="total3label" :for="`total3euro`">Do wypłaty na konto (€):</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`total3euro`" type="number" disabled v-model="total3euro"></b-form-input>
        </b-col>
      </b-row>
      <h3 id="comments">Uwagi</h3>
      <b-form-textarea
        id="textarea"
        v-model="text"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <router-link to="/print"><b-button id="printBtn" variant="info" @click="print()">Wydrukuj</b-button></router-link>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      selectMode: 'multi',
      options: [
          { value: '1', text: 'Styczeń' },
          { value: '2', text: 'Luty' },
          { value: '3', text: 'Marzec' },
          { value: '4', text: 'Kwiecień' },
          { value: '5', text: 'Maj'},
          { value: '6', text: 'Czerwiec'},
          { value: '7', text: 'Lipiec'},
          { value: '8', text: 'Sierpień'},
          { value: '9', text: 'Wrzesień'},
          { value: '10', text: 'Październik'},
          { value: '11', text: 'Listopad'},
          { value: '12', text: 'Grudzień'},
        ],
      text: "",
      days: null,
      name: "",
      statisticalNum: "",
      kilometers: null,
      rate: null,
      rateArr: [
        { value: '0.30', text:'0,30'},
        { value: '0.31', text:'0,31'},
        { value: '0.32', text:'0,32'},
        { value: '0.33', text:'0,33'},
        { value: '0.34', text:'0,34'},
        { value: '0.35', text:'0,35'},
        { value: '0.36', text:'0,36'},
        { value: '0.37', text:'0,37'},
        { value: '0.38', text:'0,38'},
        { value: '0.39', text:'0,39'},
        { value: '0.40', text:'0,40'},
        { value: '0.41', text:'0,41'},
        { value: '0.42', text:'0,42'},
        { value: '0.43', text:'0,43'},
        { value: '0.44', text:'0,44'},
        { value: '0.45', text:'0,45'}
      ],
      total1zl: null,
      exchangeRate: null,
      delegationType: "Krajowa",
      total1euro: null,
      layover: null,
      hours: null,
      total2euro: null,
      total2zl: null,
      total3euro: null,
      total3zl: null,
      charge: {
        type: "decrease",
        amount: null,
        title: "",
        currency: "PLN",
        pln: null,
        eur: null,
      },
      chargeArray: [],
      fields: [
        {
          key: 'title',
          label:'tytuł',
        },
        {
          key: 'pln',
          label:'PLN'
        }, 
        {
          key: 'eur',
          label:'EUR'
        }, 
        {
          key: 'selected',
          label: 'Zaznaczone',
        },
      ],
    }
  },
  computed: {
    month() {
      let date = new Date();
      let month = date.getMonth();
      return month;
    },
    year(){
      let date = new Date();
      let year = date.getFullYear();
      return year;
    },
    chargeArrLen() {
      return this.chargeArray.length;
    },
    biggestTotalzl() {
      let biggest=null;
      if(this.total1zl > this.total2zl) {
        biggest= this.total1zl;
      }
      else if (this.total2zl > this.total1zl) {
        biggest= this.total2zl;
      }
      return biggest;
    },
    biggestTotaleur() {
      let biggest=null;
      if(this.total1euro > this.total2euro) {
        biggest= this.total1euro;
      }
      else if (this.total2euro > this.total1euro) {
        biggest= this.total2euro;
      }
      return biggest;
    },
    increaseArr() {
      let Arr=[];
      for(let elem of this.chargeArray) {
        if(elem.type=="increase") {
          Arr.push(elem);
        }
      }
      return Arr;
    },
    decreaseArr(){
      let Arr=[];
      for(let elem of this.chargeArray) {
        if(elem.type=="decrease") {
          Arr.push(elem);
        }
      }
      return Arr;
    }
  },
  methods: { 
    onRowSelected(items) {
      this.selected = items
    },
    calculatetotal1zl(){
      if(this.kilometers !== null && this.rate !== null) {
        this.total1zl= this.kilometers * this.rate;
        this.total1zl= this.roundTo(this.total1zl, 2);
      }
    },
    calculateTotal1euro() {
      if(this.exchangeRate !== null && this.total1zl !== null) {
        this.total1euro = this.total1zl / this.exchangeRate;
        this.total1euro= this.roundTo(this.total1euro, 2);
      }
    },
    calculatetotal2euro(){
      this.total2euro= (this.days * 50) + (this.layover * 25) + (this.hours * 2.08);
      this.total2euro= this.roundTo(this.total2euro, 2);
    },
    calculateTotal2zl() {
      if(this.exchangeRate !== null && this.total2euro !== null) {
        this.total2zl= this.total2euro * this.exchangeRate;
        this.total2zl= this.roundTo(this.total2zl, 2);
      }
    },
    calculatetotal3euro(){
      let increase=0;
      let decrease=0;

      for(let elem of this.chargeArray) {
        if(elem.currency==="PLN" && this.exchangeRate !== null){
          if(elem.type=="increase") {
            increase+=parseInt(elem.amount) / this.exchangeRate;
          }
          else if (elem.type=="decrease") {
            if(parseInt(elem.amount)<0){
              elem.amount=parseInt(elem.amount) * (-1)
            }
            decrease+=parseInt(elem.amount) / this.exchangeRate;
          }
        }
        else if( elem.currency==="EUR"){
          if(elem.type=="increase") {
            increase+= parseInt(elem.amount);
          }
          else if (elem.type=="decrease") {
            if(parseInt(elem.amount)<0){
              elem.amount=parseInt(elem.amount) * (-1)
            }
            decrease+= parseInt(elem.amount);
          }
        }
      }
      
      this.total3euro= (this.biggestTotaleur+increase-decrease);
      this.total3euro= this.roundTo(this.total3euro, 2);

      if(this.total3euro==0) {
        this.total3euro="";
      }
    },
    calculateTotal3zl(){
      let increase=0;
      let decrease=0;
      
      for(let elem of this.chargeArray) {
        if(elem.currency==="PLN"){
          if(elem.type=="increase") {
            increase+=parseInt(elem.amount);
          }
          else if (elem.type=="decrease") {
            if(parseInt(elem.amount)<0){
              elem.amount=parseInt(elem.amount) * (-1)
            }
            decrease+=parseInt(elem.amount);
          }
        }
        else if( elem.currency==="EUR"){
          if(elem.type=="increase") {
            increase+=parseInt(elem.amount)*this.exchangeRate;
          }
          else if (elem.type=="decrease") {
            if(parseInt(elem.amount)<0){
              elem.amount=parseInt(elem.amount) * (-1)
            }
            decrease+=parseInt(elem.amount)*this.exchangeRate;
          }
        }
      }
      this.total3zl= (this.biggestTotalzl+increase-decrease);
      this.total3zl= this.roundTo(this.total3zl, 2)
      if(this.total3zl==0) {
        this.total3zl="";
      }
    },
    roundTo(value, places) {
      let power = Math.pow(10, places);
      return Math.round(value * power) / power;
    },
    addCharge() {
      if(this.charge.currency==="PLN") {
        this.charge.pln=this.charge.amount;
        this.charge.eur="-";
      }
      else{
        this.charge.pln="-";
        this.charge.eur=this.charge.amount;
      }
      let charge= {
        amount: this.charge.amount,
        title: this.charge.title,
        currency: this.charge.currency,
        pln: this.charge.pln,
        eur: this.charge.eur,
        type: this.charge.type,
      }
      this.chargeArray.push(charge);
    },
    removeCharge() {
      let counter= 0;
      let arrCopy= this.chargeArray.slice();
      for(let element of arrCopy){
        for(let elem of this.selected){
          if (element===elem) {
            this.chargeArray.splice(counter,1);
            counter--
          }
        }
        counter++;
      } 
    },
    print() {
      let data = {
        month: this.month,
        year: this.year,
        name: this.name,
        statisticalNum: this.statisticalNum,
        exchangeRate: this.exchangeRate,
        kilometers: this.kilometers,
        rate: this.rate,
        total1zl: this.total1zl,
        total1euro: this.total1euro,
        total2zl: this.total2zl,
        total2euro:this.total2euro,
        total3euro: this.total3euro,
        total3zl: this.total3zl,
        days: this.days,
        layover: this.layover,
        hours: this.hours,
        chargeArray: this.chargeArray,
        text: this.text,
        delegationType: this.delegationType,
        increaseArr: this.increaseArr,
        decreaseArr: this.decreaseArr,
        biggestTotaleur: this.biggestTotaleur,
        biggestTotalzl: this.biggestTotalzl
      }
      if(data.increaseArr.length==0) {
        data.increaseArr=[
          {
            amount: "-",
            title: "-",
            currency: "-",
            }
        ]
      }
      if(data.decreaseArr.length==0) {
        data.decreaseArr=[
          {
            amount: "-",
            title: "-",
            currency: "-",
            }
        ]
      }
      this.$store.dispatch('setDataToPrint', data);
    }
  },
  watch: {
    kilometers: function() {
      this.calculatetotal1zl();
    },
    rate: function() {
      this.calculatetotal1zl();
    },
    exchangeRate: function() {
      this.calculateTotal1euro();
      this.calculateTotal2zl();
      this.calculatetotal3euro()
      this.calculateTotal3zl()
    },
    total1zl: function() {
      this.calculateTotal1euro();
    },
    days: function() {
      this.calculatetotal2euro();
    },
    layover: function() {
      this.calculatetotal2euro();
    },
    hours: function() {
      this.calculatetotal2euro();
    },
    total2euro: function() {
      this.calculateTotal2zl();
      this.calculatetotal3euro()
    },
    total2zl: function () {
      this.calculateTotal3zl()
    },
    chargeArrLen: function () {
      this.calculateTotal3zl();
      this.calculatetotal3euro()
    },
    biggestTotaleur: function () {
      this.calculatetotal3euro()
    },
    biggestTotalzl: function () {
      this.calculateTotal3zl();
    },
  }
}
</script>


<style scoped>
#mainContainer {
  margin-top: 5%;
}
#leftContainer {
  margin-left: 7%;
  float: left;
  width: 40%;
  padding: 0%;
  margin-right: 0%;
  height: 100vh;
}
input, select {
  width: 100%;
  margin-right: 0% !important;
  margin-bottom: 5px !important;
}
.total {
  font-weight: bold;
}
#name {
  margin-bottom: 20px;
}
#total1euro {
  margin-bottom: 20px;
}
#total2euro {
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 25px;
}
#addBtn {
  margin-top: 15px;
  margin-bottom: 25px;
  margin-right: 1%;
}
#textarea {
  width: 50%;
}
table {
  width: 40%;
}
.col-sm-3 {
  padding: 0%;
}
#comments, #internal, #kilometersTitle {
  margin-top: 20px;
}
#printBtn {
  margin-top: 30px;
  margin-left: 29%;
}
#removeBtn {
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>
