// import React, { Component} from 'react';
// import $ from 'jquery';

// import '../searchbox.scss';

// // class SearchResults extends Component {
// //     state = {
// //         users: []
// //     }

// //     static testfunction(){
// //         return (
// //             console.log("test pass")
// //         )
// //     }
// //     render() {
// //        return (<Fragment>
           
// // </Fragment>
// // )
// //     }

// // }

// class SearchBox2 extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             searchtext: '',
//             spantext: '',
//             users: [],
//             search_class: "search"
//         }
//         this.search = React.createRef();
//         this.search2 = document.getElementById("testsearch")
//         this.form = $('#searchform');
//         this.input = $('#searchinput');
//         this.span = $('#searchspan');
//         // this.bar = this.search.children('.bar');
//         // this.close = this.search.children('.close');
//         // this.list = this.search.children('ul');

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//     }



//     handleSubmit(e) {
//         e.preventDefault();
//         // var search2 = document.getElementById("testsearch")
//         console.log(this.search2.classList)
//         if(!this.search2.classList.contains('prepare')) {
//             this.input.blur();
//             this.span.text(this.input.val()).appendTo(this.bar);
//             this.search2.classList.add('prepare','submit')
//             // this.setState({search_class: this.state.search_class + " prepare submit"});
//             console.log(this.state.search_class)
//             setTimeout(function() {
//                 this.search2.classList.remove('submit');
//             }, 200);
//             setTimeout(function() {
//                 this.search.addClass('animate');
//                 this.bar.animate({
//                     width: (this.search.outerWidth() - 32)
//                 }, 800, function() {
//                     var searchW = ((this.list.outerWidth() + 32) > (72 + this.bar.outerWidth())) ? (this.list.outerWidth() + 32) : 72 + this.bar.outerWidth();
//                     this.search.animate({
//                         width: searchW
//                     }, 400);
//                     setTimeout(function() {
//                         this.search.animate({
//                             height: this.search.outerHeight() + this.list.outerHeight()
//                         }, 500, function() {
//                             const username = $('<span />').text(this.input.val())[0].innerText
//                             $.ajax({url: "/instagramusername/"+username,contentType: "application/json",dataType: 'json',success: 
//                                 function(result){
//                                     $.each(result["users"], function(key, value) {
//                                         AddUsers(value);
//                                         console.log("bu test")
//                                 });
//                                 }})
//                                 this.list.addClass('show');
//                         });
//                     }, 200);
//                 });
//                 setTimeout(function() {
//                     this.search.addClass('done');
//                 }, 800);
//             }, 1250);
//         }
//     };

//     handleClose(e) {
//             this.search.removeClass('done');
//             setTimeout(function() {
//                 this.input.val('');
//                 this.bar.animate({
//                     width: 32
//                 }, 1000, function() {
//                     this.search.addClass('reset');
//                     this.bar.children('span').remove();
//                     setTimeout(function() {
//                         this.search.removeClass('animate reset prepare');
//                         setTimeout(function() {
//                             this.input.animate({
//                                 width: 32
//                             }, 400, function() {
//                                 this.bar.removeAttr('style');
//                             });
//                         }, 200);
//                     }, 400);
//                 });
//                 this.list.removeClass('show');
//                 setTimeout(function() {
//                     this.search.animate({
//                         height: 62
//                     }, 400, function() {
//                         this.search.animate({
//                             width: 92
//                         }, 400, function() {
//                             this.search.removeAttr('style');
//                         });
//                     });
//                 }, 200);
//             }, 500);
//     };

    
//     updateInputValue(evt) {
//         this.setState({
//             searchtext: evt.target.value
//         });
//       }

//     componentDidMount() {

//     };
//     render() {
//         return(
//             <div className="searchbox" id="searchbox">
//             <div className={this.state.search_class} ref={this.search} id='testsearch'>
//                 <div className="bar" id="bar">
//                     <div className="icon" >
//                         <i></i>
//                     </div>
//                 </div>
//                 <form onSubmit={this.handleSubmit} id="searchform">
//                     <input type="text" id="searchinput" value={this.state.searchtext} onChange={evt => this.updateInputValue(evt)}></input>
//                     <span id="searchspan">{this.state.spantext}</span>
//                 </form>
//                 <div className="close" onClick={this.handleClose} id="searchclose"></div>
//                 <ul>
//                     <AddUsers/>
                    
//                 </ul>
//             </div>
        
//             <p className="searchboxtext" >Type instagram username and hit <strong>Enter</strong></p>
//         </div>
//     )}
// }




// function AddUsers(user) {
//     const picture = user.profile_pic_url
//     const username = user.username
//     const fullname = user.full_name
//     const is_private = user.is_private

//     const image = new Image();
//     image.src = picture
//     return (
//         <li>
//             <button>
//                 <img src={image} alt=""></img>
//                 <h5>{fullname}</h5>
//                 <p >{username}</p>
//                 <span>{is_private}</span>
//             </button>
//         </li>
//     )
// }





// // export default SearchBox2;