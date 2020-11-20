import {getLocalStorage, setLocalStorage} from './storage.js';

const userData={
    wishlistData: getLocalStorage('wishlist'),
    get wishList(){
        return this.wishlistData;
    },
    set wishList(id){
        if(this.wishlistData.includes(id)){
            const index=this.wishlistData.indexOf(id);
            this.wishlistData.splice(index,1);
        }else{
            this.wishlistData.push(id);
        };
        setLocalStorage('wishlist', his.wishList);
        
    },
    cartListData: getLocalStorage('cartlist'),

    get cartList(){
        return this.cartListData
    },

    set cartList(id){
        let obj=this.cartListData.find(item=>item.id===id);
        if(obj){
            obj.count++;       
        } else {
            obj={
                id: id,
                count: 1,
            };
            this.cartListData.push(obj);
        };
        setLocalStorage('cartlist', this.cartList);
    },

    set changeCountCartList(itemCart){
        let obj=this.cartListData.find(item=>item.id===itemCart.id);
        obj.count=itemCart.count;

        setLocalStorage('cartlist', this.cartList);
	},

    set deleteItemCart(idd){
        let index=-1;
        this.cartList.forEach((item, i)=>{
            if(item.id===idd){
                index=i;
            }
        });
        this.cartList.splice(index,1);
        setLocalStorage('cartlist', this.cartList);
    }
};

export default userData;