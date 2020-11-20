

//"легенда" какая-то(так называют то, в чем содержится парам). Используется для того, чтобы привести к правильному виду и индифицировать параметр category/subcategory


const PARAM={
    cat: 'category',
    subcat: 'subcategory',
    search: ['name', 'description', 'category', 'subcategory'],
};

const getData={
    url: 'database/dataBase.json',

    get(process){
        fetch(this.url).
        then(response=>response.json()).
        then(process);
    },

    wishList(list, callback){
        this.get((data)=>{
            const result=data.filter((item)=>list.includes(item.id));
            callback(result);
        })
    },

    item(value, callback){
        this.get((data)=>{
            const result=data.find(item=>item.id===value);
            callback(result);
        })
    },

    cart(cartList, callback){
        this.get((data)=>{
            const result=data.filter(item=>cartList.some(cartListItem=>cartListItem.id===item.id))
        
            callback(result);
        })
    }, 
    
    category(prop, value, callback){
        this.get((data)=>{
            const result=data.filter(item=>item[PARAM[prop]].toLowerCase()===value.toLowerCase());
            callback(result);
        })
    },

    search(searchRequest, callback){
        this.get((data)=>{
            const result = data.filter(item=>{
                for (const prop in item){
                    if(PARAM.search.includes(prop)&&item[prop].toLowerCase().includes(searchRequest.toLowerCase())){
                        return true
                    }
                }
            })
            callback(result);
        })
    },

    

    catalog(callback){
        let categorysArr=[];
        this.get((data)=>{
            const result=data.filter(item=>{
                if(!categorysArr.includes(item.category)){
                    categorysArr.push(item.category);
                    return true
                }
            })
            callback(result);
        })
    },

    

    subCatalog(categoryValue, callback){
        this.get((data)=>{
            const result=data
            .filter((item)=>item.category.toLowerCase()===categoryValue.toLowerCase())
            .reduce((arr, item)=>{
                if(!arr.includes(item.subcategory)){
                    arr.push(item.subcategory);
                }
                return arr
            }, []);

            callback(result);
        })
    },

  
    
};


export default getData;


// в get(callback) из объекта getData мы отправляем запрос на сервер и в ответ получаем данные, после чего передаем в качестве аргумента метода(функции) callback в котором и говорим что делать дальше.

 //Сам этот get используется только в самом же объекте getData для других методов:
//  - wishlist - занимается подгрузкой виш листа покупателя сайта за счет использования. 
//  - item - 
//  - cart - 

