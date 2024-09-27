


const initialState = {
    products: [],
    keyword: "",
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        sortingProducts: (state, action) => {  //? sıralama yapar artan,azalan
            state.products = [
                ...state.products.sort((a, b) =>
                    action.payload == "asc"
                        ? a.price - b.price
                        : action.payload == "desc"
                            ? b.price - a.price
                            : null
                )
            ]
        },

        addNewProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        }
    }
})

//!   Parametreler: state ve action
//!   state: Mevcut durumu temsil eder.
//!   action: İşlemi temsil eder ve genellikle bir type ve payload içerir.
//!   İşlem: Ürünleri sıralar.
//!   action.payload değeri "asc" ise, ürünleri fiyatlarına göre artan sırada sıralar.
//!   action.payload değeri "desc" ise, ürünleri fiyatlarına göre azalan sırada sıralar.
//!   action.payload değeri ne "asc" ne de "desc" ise, sıralama yapılmaz (bu durumda null döner).