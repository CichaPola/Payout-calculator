<template>
    <div id="mainContainer">
        <table>
            <tr>
                <td id="tab1Col1">
                    <p id="companyName">FirmaX sp. z o.o. {{data.month}} {{data.year}}</p>
                    <p id="statisticalNum">Numer statystyczny: {{data.statisticalNum}}</p>
                    <p>Kurs euro: {{data.exchangeRate}}</p>
                </td>
                <td class="rightCol" id="name">
                    <h2 id="driverName">{{data.name}}</h2>
                </td>
            </tr>
            <tr>
                <td class="leftCol">
                    <h3>Kilometry</h3>
                   <p>Ile (km): {{data.kilometers}}</p>
                   <p id="rate">Stawka (zł): {{data.rate}}</p>
                   <p class="total">Do wypłaty (zł): {{data.total1zl}}</p>
                   <p class="total">Do wypłaty (€): {{data.total1euro}}</p>
                </td>
                <td class="rightCol">
                    <h3>Delegacja {{delegationType}}</h3>
                    <p>Ilość dni: {{data.days}}</p>
                    <p>Postój (12h): {{data.layover}}</p>
                    <p>Godziny: {{data.hours}}</p>
                    <p class="total">Do wypłaty (zł): {{data.total2zl}}</p>
                    <p class="total">Do wypłaty (€): {{data.total2euro}}</p>
                </td>
            </tr>
            <tr>
               <td class="leftCol"> 
                    <h3 id="charges">Zwiększenia</h3>
                    <b-table
                        :items="data.increaseArr"
                        :fields="fields"
                        head-variant=light
                        id="increaseTab"
                        :bordered="true"
                    >
                    </b-table>
               </td>
               <td id="tab2Col2" class="rightCol">
                    <h3 id="charges">Zmniejszenia</h3>

                    <b-table
                        :items="data.decreaseArr"
                        :fields="fields"
                        head-variant=light
                        id="decreaseTab"
                        :bordered="true"
                    >
                    </b-table>
               </td>
           </tr>
        </table>      
        <p class="total">Do wypłaty na konto (zł): {{data.total3zl}}</p>
        <p class="total">Do wypłaty na konto (€): {{data.total3euro}}</p>

        <h3 id="commentsTitle">Uwagi</h3>

        <textarea name="comments" id="comments" cols="133" rows="4" v-model="data.text"></textarea>

        <table id="manualFilling">
            <tr>
                <td class="manualFillingL">Podstawa</td>
                <td class="manualFillingR"></td>
            </tr>
            <tr>
                <td class="manualFillingL">Suma do wypłaty</td>
                <td class="manualFillingR"></td>
            </tr>
            <tr>
                <td class="manualFillingL">Na konto</td>
                <td class="manualFillingR"></td>
            </tr>
            <tr>
                <td class="manualFillingL">Gotówką</td>
                <td class="manualFillingR"></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                increaseArr: [
                    {
                    amount: "-",
                    title: "-",
                    currency: "-",
                    }
                ],
                creaseArr: [
                    {
                    amount: "-",
                    title: "-",
                    currency: "-",
                    }
                ]
            },
            fields: [
                {
                key: 'title',
                label:'Tytułem',
                },
                {
                key: 'amount',
                label:'Kwota',
                },
                {
                key: 'currency',
                label:'Waluta',
                },
            ],
        }
    },
    async created(){
        await this.getData();
        window.print(); 
        this.$router.replace({ name: "form" }); 
    },
    methods: {
        getData() {
            this.data = this.$store.getters.getData;   
        },
    },
    computed: {
        delegationType() {
            return this.data.delegationType.toLowerCase()
        },
    }   
}
</script>

<style scoped>
.manualFillingL, .manualFillingR {
    width: 150px;
    padding: 2px;
    padding-left: 5px;
    border: 1px solid rgb(189, 189, 189);
}
.manualFillingR {
    width: 800px;
}
#mainContainer {
    margin-left: 50px;
    margin-top: 50px;
}
#rate{
    margin-bottom: 56px;
}
.total {
    font-weight: bold;
}
h3 {
    margin-bottom: 20px;
}
#charges {
    margin-top: 20px;
}
#comments {
    margin-bottom: 20px;
}
#decreaseTab, #increaseTab {
    width: 400px;
}
#companyName {
    width: 550px;
    display:inline-block;
}
#driverName {
    width: 250px;
    display:inline-block;
    font-weight: bold;
}
#name {
    vertical-align: top;
}
textarea {
    padding-left: 5px;
}
#nameCol {
    vertical-align: top;
}
@-moz-document url-prefix() {
    .rightCol {
        padding-left: 150px;
    }
    #commentsTitle {
        padding-top: 20px;
    }
}    
</style>>

