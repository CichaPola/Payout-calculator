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
          <b-form-select :id="`month`" v-model="month" :options="monthOptions"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="`year`">Rok:</label>
        </b-col>
        <b-col sm="5">
          <b-form-select :id="`year`" v-model="year" :options="yearOptions"></b-form-select>
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
      monthOptions: [
        { value: 'Styczeń', text: 'Styczeń' },
        { value: 'Luty', text: 'Luty' },
        { value: 'Marzec', text: 'Marzec' },
        { value: 'Kwiecień', text: 'Kwiecień' },
        { value: 'Maj', text: 'Maj'},
        { value: 'Czerwiec', text: 'Czerwiec'},
        { value: 'Lipiec', text: 'Lipiec'},
        { value: 'Sierpień', text: 'Sierpień'},
        { value: 'Wrzesień', text: 'Wrzesień'},
        { value: 'Październi', text: 'Październik'},
        { value: 'Listopad', text: 'Listopad'},
        { value: 'Grudzień', text: 'Grudzień'},
      ],
      month:"",
      yearOptions: [
        { value: "2020", text: "2020"},
        { value: "2021", text: "2021"},
      ],
      year: "",
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
      exchangeRate: null,
      delegationType: "Krajowa",
      layover: null,
      hours: null,
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
  created() {
    if(this.month=="") {
      this.month=this.currentMonth;
    }
    if(this.year=="") {
      this.year=this.currentYear;
    }
  },
  computed: {
    currentMonth() {
      let date = new Date();
      let month = date.getMonth();
      const months= ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
      return months[month];
    },
    currentYear(){
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
    },
    total1zl(){
      let total1zl;
      if(this.kilometers !== null && this.rate !== null) {
        total1zl= this.kilometers * this.rate;
        total1zl= this.roundTo(total1zl, 2);
      }
      return total1zl;
    },
    total2zl() {
      let total2zl;
      if(this.exchangeRate && this.total2euro) {
        total2zl= this.total2euro * this.exchangeRate;
        total2zl= this.roundTo(total2zl, 2);
      }
      return total2zl
    },
    total3zl(){
      let increase=0;
      let decrease=0;
      let total3zl;

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
      total3zl= (this.biggestTotalzl+increase-decrease);
      total3zl= this.roundTo(total3zl, 2)
      if(total3zl==0) {
        total3zl="";
      }
      return total3zl;
    },
    total1euro() {
      let total1euro;
      if(this.exchangeRate && this.total1zl) {
        total1euro = this.total1zl / this.exchangeRate;
        total1euro= this.roundTo(total1euro, 2);
      }
      return total1euro;
    },
    total2euro(){
      let total2euro;
      total2euro= (this.days * 50) + (this.layover * 25) + (this.hours * 2.08);
      total2euro= this.roundTo(total2euro, 2);
      if(total2euro==0) {
        total2euro="";
      }
      return total2euro;
    },
    total3euro(){
      let increase=0;
      let decrease=0;
      let total3euro;

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
      
      total3euro= (this.biggestTotaleur+increase-decrease);
      total3euro= this.roundTo(total3euro, 2);

      if(total3euro==0) {
        total3euro="";
      }
      return total3euro;
    },
  },
  methods: { 
    onRowSelected(items) {
      this.selected = items
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
}
</script>


<style scoped>
#mainContainer {
  margin-top: 40px;
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
