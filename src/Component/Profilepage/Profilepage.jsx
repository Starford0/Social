import './Profilepage.css'



const Profilepage = ()=>{
    const sendPost = () => {
        if (!post && !inputFile) {
          return null;
        } else {
          const newData = {
            post: post,
            name: loggedInUser.name,
            email: loggedInUser.email,
            posterImage: loggedInUser.image,
            image: inputFile,
            like: 0,
            likers: [],
          };
          const updatedPost = [...posts, newData];
          setPosts(updatedPost);
          localStorage.setItem("allPosts", JSON.stringify(updatedPost));
          setPost("");
          setInputFile(null);
        }
      };
    
    return(
<>
<div className="Mainholder" >
    <div className='Post'>
        <div className='leftmid'>
            <div className='logoholder'>
                <img src="public/instagram-logo-name.png" alt="" />
            </div>

            <div className='user'>
                <div className='userholder'>
                    <img src="public/BOY.jpeg" alt="" />
                </div>
                <h3>Shallipopi</h3>

            <div className='follower'></div>
         
            </div>
              <div className='leftoption'></div>
              <div className='logout'>
                <div className='logouticon'>
                    <img src="public/images (2).png" alt="" />
                </div>
                <div className='writeup'>
                    <h3>Logout</h3>
                </div>
            </div>

        </div>

        


        <div className='mid'>
            <div className='create'>
                <div className='createpost' >
                    <h5>Create Post</h5>
                </div>
            </div>
        <div className='top'>
            <div className='holder1'>
               <img src="public/plus (1).png" alt=""/>
            </div>
            <div className='holder2'>
                <img src="public/Boy2.jpeg" alt=""/>
            </div>
            

             <div className='holder3'>
                <img src="public/Boy2.jpeg" alt=""/>
                
             </div>

            <div className='holder4'>
                <img src="public/Boy2.jpeg" alt=""/>
            </div>
            <div className='holder5'>
                <img src="public/Boy2.jpeg" alt=""/>
            </div>
            <div className='holder6'>
                <img src="public/Boy2.jpeg" alt=""/></div> 
        </div>

         <div className='caption'>
            <div className='Box1'>
                <h2>Feeds</h2>
            </div>

            {/* <div className='Box2'>
                 <div className='La'>
                    <h2>Latest</h2>
                 </div>
                 <div className='Po'>
                    <h2>Popular</h2>
                 </div>
            </div> */}
         </div>


        <div className='post'>

            <div className='username'>
                <div className='image'>
                    <img src="public/BOY.jpeg" alt="" />
                </div>
                <h3>shallipopi</h3>
                <div className='location'>
                    {/* <span>Ontario Canada</span> */}
                </div>

            </div>

            <div className='mainpost'></div>

            <div className='icon'>
                <div className='heart'>
                    <img src="public/heart.png" alt="" />
                    <h5>2.5k</h5>
                </div>

                <div className='comment'>
                    <img src="public/comment.png" alt="" />
                    <h5>comment</h5>
                </div>

                <div className='share'>
                    <img src="public/share.png" alt="" />
                    <h5>200</h5>
                </div>


                <div className='save'>
                    <img src="public/save.png" alt="" />
                    <h5>16</h5>
                </div>
                 
       
            </div>



        </div>
       

        </div>

        <div className='rightmid'>
            <div className='iconsdashbar'>
                <div className='Arrowpost'>
                {/* <TiLocationArrowOutline className='arrowpost' /> */}
                </div>
                <div className='Bellpost'>
                {/* <PiBellSimple className='bellpost' /> */}
                </div>
            
           
            {/* <GiHamburgerMenu className='menupost' /> */}


            </div>

            <div className='Trendingfeed'>
                <h5>Trending Feeds</h5>
            </div>
            <div className='TrendinBox'>
                <div className='FirstBoxtrend'>
                    <div className='SecondBoxtrend'>
                        <img src="" alt="" />
                        </div> 
                    <div className='SecondBoxtrend2'></div> 
                </div>
                <div className='FirstBoxtrend2'>
                    <div className='SecondBoxtren3'></div> 
                    <div className='SecondBoxtren4'></div> 
                </div>
                
            </div>
            <div className='suggestion'>
                <h5>Suggestion for you</h5>
            </div>
             <div className='LeftdashBox'>
                <div className='LeftCirclebox'>
                    <img src="" alt="" />
                </div>
                <h5>Wisdom Chiedra</h5>
             </div>
             <div className='LeftdashBox'>
                <div className='LeftCirclebox'></div>
                <h5>George Nmesomachi</h5>
             </div>
             <div className='LeftdashBox'>
                <div className='LeftCirclebox'></div>
                <h5>Daniel Ogah</h5>
             </div>
             
             <div className='Activist'>
                <h5> Profile Activity</h5>
             </div>
             <div className='clusterprofile'>
                <div className='clustercirlcle'>
                    <img src="" alt="" />
                </div>
                <div className='clustercirlcle'></div>
                <div className='clustercirlcle'></div>
                <div className='clustercirlcle'></div>
                <div className='clustercirlcle'></div>
             </div>
             <div className='followers24k'>
                <div className='fellowpeopel'>
                    <h3>24.3k</h3> <p>Followers</p>
                </div>
             </div>
             <div className='activeonprofile'>
                <p>Active now on your profile</p>
             </div>

            
        </div>
   
    


    </div>




</div>
</>
    )
}

export default Profilepage