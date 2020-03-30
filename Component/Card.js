import React, { Component } from 'react'

export class Card extends Component {
    

        constructor(props){
            super(props)
            this.state ={number: 'xxxx xxxx xxxx xxxx', valid : 'MM/DD', holder : 'CARD HOLDER'}

        }



        handlechange=(e)=>{
            let i = 0 ;
            let regextest = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g
            if (regextest.test(e.target.value)) {

                this.setState({
                  
                    number: (e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ')).slice(0,19)
                   

                    
                    
                    
                  })
                
            }
              


          
          }

          
        handleC=(e)=>{
            let regextest = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g
            if (regextest.test(e.target.value) && e.target.value.slice(0,2)<13) {
          
            this.setState({
              valid: e.target.value,
              valid : (e.target.value.slice(0, 2) + '/' + e.target.value.slice(2)).slice(0,5)


            })
            }
        }

        handleChange=(e)=>{
            let regextest = /^[A-Za-z]+$/g
            if (regextest.test(e.target.value)) {
            this.setState({
              holder: e.target.value,

            })
            }
        }









            render() {
        return (
            <div>
            <div className='credit-card'>
                <div className='cardtext'>
                    <div className='company-name'>
                <h1>Company name</h1>
                </div>
                <div className="chip"></div>

                <h1 className='card-number' >{this.state.number}</h1>
                <h1 className='v-thru'>{this.state.valid}</h1>
                <h1 className='holder'>{this.state.holder.toUpperCase()}</h1>
                <img className='logo' src='https://pics.ebaystatic.com/aw/pics/mastercard/blue_card.png'/>
                </div>
            </div>

            <div className='inpt'>
<p> Card number : <input  onChange={this.handlechange} type='text' placeholder='1111111111111111'></input> </p>
<p> Valid thru : <input onChange={this.handleC} type='text' placeholder='MMYY'></input></p>
<p> Card holder : <input onChange={this.handleChange}  type='text' placeholder='Your Name here'></input></p>

<button>Submit</button>vvvvvvvvvvvvvvvvvvvvvv
            </div>

            </div>
        )
    
}
}

export default Card;