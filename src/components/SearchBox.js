import React, { Fragment, useState} from 'react';
import TreeCanvas from "./TreeCanvas";
import $ from 'jquery';
import axios from "axios";
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
  } from "react-query";
  
import '../searchbox.scss';

const queryClient = new QueryClient();



function SearchQuery() {
    const [level1Array, setLevel1Array] = useState([])
    const [postId, setPostId] = useState(-1);

    function submitForm(e){
        // var usersUl = document.getElementsByClassName('showusernames')
        e.preventDefault();
        console.log(e.target.username.value);
        setPostId(e.target.username.value)
        
      }


    return (
        <Fragment>
        <QueryClientProvider client={queryClient}>

            <div className='searchbox'>
                <div className='search'>
                    <div className='bar'>
                        <div className='icon'>
                            <i></i>
                        </div>
                    </div>
                    <form onSubmit={submitForm}>
                        <input type='text' name="username" id="searchusername"></input>
                    </form>
                    <div className="close"></div>
                    <ul id='showusernames' >
                    {String(postId).length > 3 ? (
                        <Post postId={postId} setPostId={setPostId} level1Array={level1Array} setLevel1Array={setLevel1Array}/>
                        ) : (
                        <Posts setPostId={setPostId}/>
                        )}
                    </ul>
                </div>
                <p className="searchboxtext" >Type instagram username and hit <strong>Enter</strong></p>
            </div> 
        </QueryClientProvider>
        <TreeCanvas level1Array={level1Array} setLevel1Array={setLevel1Array}/>
        </Fragment>
    )
}

const getPostById = async (id) => {
    const { data } = await axios.get(
      `/instagramusername/${id}`
    );
    console.log(data)
    return data;
  };

function usePost(postId) {
return useQuery(["post", postId], () => getPostById(postId), {
    enabled: !!postId,
});
}

function submitUser(post,level1Array,setLevel1Array) {
    // var showusernames = document.getElementById('showusernames')
    // showusernames.classList.remove('show')
    // $('usersUl').removeClass('show')
    // level1Array.push({'id':post.pk, 'username':post.username})
    console.log(post)
    console.log(level1Array)
    setLevel1Array(setLevel1Array => [...setLevel1Array, {'id':post.pk, 'username':post.username}])
  }

function Post({ postId, setPostId, level1Array, setLevel1Array }) {
    const { status, data, error} = usePost(postId);


    

    
  
    return (
        <div>
        {status === "loading" ? (
            "Loading..."
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              
                {data.users.map((post) => (
                    
                    <li key={post.pk} >
                        <form onClick={() => { submitUser(post,level1Array,setLevel1Array) }}>
                        <img src={'data:image/jpeg;base64,' + post.profile_pic_url} alt=''></img>
                        <h5>{post.full_name}</h5>
                        <p>{post.username}</p>
                        {/* <span>{post.is_private}</span> */}
                        </form>
                    </li>

                ))}
              
            </>
          )}
        </div>
    );
  }

function Posts() {
    return(
        <li></li>
    ) 
}



$(function() {

    $('.search').each(function() {

        var self = $(this);
        var form = self.children('form');
        var input = form.children('input');
        // var span = $('<span />').appendTo(form);
        var bar = self.children('.bar');
        var close = self.children('.close');
        var list = self.children('ul');


        form.submit(function(e) {
            e.preventDefault();
            if(!self.hasClass('prepare')) {
                input.blur();
                $('<span />').text(input.val()).appendTo(bar);
                self.addClass('prepare submit');
                setTimeout(function() {
                    self.removeClass('submit');
                }, 200);
                setTimeout(function() {
                    self.addClass('animate');
                    bar.animate({
                        width: (self.outerWidth() - 32)
                    }, 800, function() {
                        var searchW = ((list.outerWidth() + 32) > (72 + bar.outerWidth())) ? (list.outerWidth() + 32) : 72 + bar.outerWidth();
                        self.animate({
                            width: searchW
                        }, 400);
                        setTimeout(function() {
                            self.animate({
                                // height: self.outerHeight() + list.outerHeight()
                                height: 520
                            }, 500, function() {
                                list.addClass('show');
                            });
                        }, 200);
                    });
                    setTimeout(function() {
                        self.addClass('done');
                    }, 800);
                }, 1250);
            }
        });

        close.on('click', function(e) {
            self.removeClass('done');
            setTimeout(function() {
                input.val('');
                bar.animate({
                    width: 32
                }, 1000, function() {
                    self.addClass('reset');
                    bar.children('span').remove();
                    setTimeout(function() {
                        self.removeClass('animate reset prepare');
                        setTimeout(function() {
                            input.animate({
                                width: 32
                            }, 400, function() {
                                bar.removeAttr('style');
                            });
                        }, 200);
                    }, 400);
                });
                list.removeClass('show');
                setTimeout(function() {
                    self.animate({
                        height: 62
                    }, 400, function() {
                        self.animate({
                            width: 92
                        }, 400, function() {
                            self.removeAttr('style');
                        });
                    });
                }, 200);
            }, 500);
        });

        list.on('click', function(e) {
            self.removeClass('done');
            setTimeout(function() {
                input.val('');
                bar.animate({
                    width: 32
                }, 1000, function() {
                    self.addClass('reset');
                    bar.children('span').remove();
                    setTimeout(function() {
                        self.removeClass('animate reset prepare');
                        setTimeout(function() {
                            input.animate({
                                width: 32
                            }, 400, function() {
                                bar.removeAttr('style');
                            });
                        }, 200);
                    }, 400);
                });
                list.removeClass('show');
                setTimeout(function() {
                    self.animate({
                        height: 62
                    }, 400, function() {
                        self.animate({
                            width: 92
                        }, 400, function() {
                            self.removeAttr('style');
                        });
                    });
                }, 200);
            }, 500);
        });

        
    });
});

export default SearchQuery;
