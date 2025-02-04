# mutable and immutable

let myName = "JS"
myName = "C++" // valid as we are changing value

myName[0] = "r" // invalid as we are changing string which are immutable

so primitive types are immutable
in memory "JS" have permanent place, i cannot change it
'myName' is pointing to "JS" , we can make it point to "C++"
see the diff , we are not changing place of "JS"

in other words we cannot modify "JS"

\*Non-primitives are mutable

const obj = {name: "JS", version:{major: 3}}

function changeLang(param){
param.name = "React"
param.version.major = "19"
}

changeLang(obj)
console.log(obj)

//above changeLang function can change our object
//solution: use Object.freeze(obj)
// but a problem rises, if nested obj then still func can change it

//to solve this use the copy of object.
changeLang(structredClone(obj))
now original obj won't modified

** we want that no one can change our object, redux solves this problem **

# Immutability in React

any component can change our data which is present is our object. we don't want that
we would not get any warning or error that the object has been modified

# Redux

it is a state management lib for Javascript.

it says give me all the data of your app in form of a object and i will change the data.
developer will tell redux what to change and redux will manage it and when it gets changed redux will tell us

it also avoids prop drilling

website vs webApp (the data flow in webApp is large compared to website, twitter, insta is webapp. medium, simple blog site is website)

we have store (an object)

we cannot directly update this store, to update this store

step1:
create a object, that object will tell redux, what is new value you want to update/del/add
Type: based on type, you will update the specific data

step2:
you will send the info created in step1, by calling a function, this function is provided by redux

step3:
updater function: this will check what to update and based on that it will update the store and notify you

step4:
based on notification update the UI or whatever you want to do

Action, dispatch, Reducer, useSelector/subscribe

# implementing Redux

step1: create store

const store = createStore()
it takes 3 arguments
a. function: this is a reducer function
b. object
if we want to preload some info into store. basically it persists our data in localstore
c. enhancers

step2: create reducer function, it takes state and action

so create action and state

step3: dispatch action
store.dispatch(action)

step4: inside reducer function you can change the state or modify the data

step5: till this point data or state is changed. now how will i know
store.subscribe(()=>{
console.log("store changed", store.getState())
})

\*\* we use redux persist library for persisting our data

# React-redux

till now we have created our store, so that our <App /> can use it , we use <Provider store ={store}> from react-redux

const appState = useSelector((state)=> state) // to use data or state

const dispatch = useDispatch(action)

# Implementing React-redux in our app

const movies = useSelector(function(state){
return state
})

**bad practice, never return whole state from useSelector**

because this leads to unnecessary rerenders as state changes

make actions creator instead of making action object

eg: const updateError = (value) =>{
return {
type: "UPDATE_ERROR",
value
}
}

and now we can dispatch them any where in our app
dispatch(updateError(true))

# actions

if (action.type === "version") {
const oldState = { ...state }
oldState.version = action.payload
return oldState
}

so if we directly mutate the state directly, then redux won't know if state is changed or not because the reference is same

**useSelector(state => state) here we have subscribed to whole store, whenever there is some change in store then UI gets changed. This is why it is said don't subscribe to whole store but a part of a store which a particular state. Eg: useSelector(state => state.cart)**

const initialState = {
cart:{}, //try not to make array to store items because in array to search smth, you have to loop whereas in object it is O(1) time
}

- when you dispatch an action, redux passes it in all reducers. that is why do not create same name actions

but this can be useful also to create same actions name, depends on use case. if we want and action to trigger another action, then we can do so.

- Redux encourages for using single 'store'
  you can use Zustand and other libraries if you want to work with multiple store

- avoid putting form data in Redux

# Redux Dev Tool

in redux to enable redux dev tool, use a package
import { composeWithDevTools } from "@redux-devtools/extension"
and pass as an argument in createStore()

basically you can control your actions, you can do time travel and know which action was fired when

'Trace' option. here you can see your code

to enable this use composeWithDevTools({trace:true, limit:10})

**thunk** it is a function which execute a function after some delay

# Redux ToolKit (RTK)

though we know that store in redux is an object which holds all of our application data. but we should never put all our data in store alltogether , rather we should split the data into branches, which means we should make multiple reducer function.

redux don't recommend deep clone as it will bring unnecessary re-renders

->Pain points of redux

1. too much boiler plate, writing actions, make folders
2. we cannot make api call, need additional library to perform async action
3. dev tools are not provided
4. combine reducers function to use multiple reducers
5. accidently mutating state, which means directly mutating state and react-redux won't give you any warning

immer.js is used to create immutable objects in js and RTK internally uses this to make your work easy

immer.js might be using getter setters , proxy objects to achieve immutability
state.movie = action.payload // this line is doing so much bts

const store = configureStore({
devTools: true, // default true,
trace: true, // default false prod me onn mat karna
reducer: {
movies: moviesReducer,
cart: cartReducer,
},
// middleware: function (previousMiddlewares) {
// // [...previousMiddlewares(), []];
// previousMiddlewares().concat([]);
// // you have to return a array from here
// },
preloadedState: {},
});

preloadedState: data you want to show on load

# Slices

now you can create action and reducer function together and more easily than using createAction() , createReducer(), builder

these slices are same as those branches we talked about earlier. we need to create diff diff reducer function in redux , here in RTK we have to create diff slices

slices create reducer function and action for you

In redux toolkit we have unique action name which is formed by rtk , so if we have unique action names that means when we dispatch action it will go to a particular slice only where it is defined. eg cart/updateCart will go to cartSlice only.

now what if you want that when one action dispatch it also affects the other slice or reducer. you cannot do that because action name is unique. for that RTK provide 'extra reducers'

# createAsyncThunk

to manage APIs

now if you want to make api call to fetch data for cart , just simply dispatch this fetchCart function from that component.

dispatch(fetchCart(params))

const fetchCart = createAsyncThunk('cart/fetch', (params, object)=>{

the object have {rejectWithVAlue,getSTate,dispatch}

// this should always return a promise
//because slice uses the promise state to update the store.
for eg:

return axios.get()

})

now we have to use it in our slice. for that we have to decide what would happen if promise is rejected fullfilled or pending. this happens in extraReducers

extraReducers:(builder)=>{
builder.addCase(createProduct.pending, (state, action) => {
state.loading = true;
});

builder.addCase(createProduct.fulfilled, (state, action) => {
state.loading = false;
state.createRedirect = false;
state.createdProduct = action?.payload;
state.serverErr = undefined;
state.appErr = undefined;
});

builder.addCase(createProduct.rejected, (state, action) => {
state.appErr = action?.payload?.message;
state.serverErr = action?.payload?.message;
state.loading = false;
});
}

# createEntityAdaptor

redux tells us to normalize our state(which means make state as objects, do not make nested objects)

const todo = {
todo: []
}

//edit by id 3

const todoEdit = todos.find(t => t.id === id)

the above is not recommended

const todo = {
todosById:{
3: {name: 'work}
}
}

const todoEdit = todos[3]

createEntityAdaptor normalises for us
so if we use createEntity to make our intialState
like this
{
ids:[]
entities:{

}
}

it will give us some functions to make our work easier where we don't have to write logic to query the data or manipulate data

const movieAdaptor = createEntityAdaptor()

addToCart: movieAdaptor.add

this is helpful when we are doing CRUD to our store
