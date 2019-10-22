import  React, { Component } from 'react'
import data from '../response/response'
import Header from './Header'



class MentorProfile extends Component{ 

    state ={
        mentorId: null,
        mentorProfile:null
    }

    componentDidMount(){
        let id = this.props.match.params.mentorId;
        
        this.setState({
            mentorId:id,
            // eslint-disable-next-line
            mentorProfile: data.filter(item=>item.id == id)[0]
        });
        
    }
  

    render() {
  const hasProfileData = this.state.mentorProfile ? (<div>
    <div className="row mt-5 no-gutters">
        <div className="col-sm-4 col-md-4 ">
        <img src={this.state.mentorProfile.image} className="card-img " alt={this.state.mentorProfile.name} />        
        </div>
        
        <div className="col-md-8">
            <div className="card-body">
                <h4 className="card-title">{this.state.mentorProfile.name}</h4>
                <p className="card-text"><small className="text-muted">{this.state.mentorProfile.country}</small></p>
                <p className="card-text">{this.state.mentorProfile.biography}</p>
                <p className="card-text ">{this.state.mentorProfile.technology}</p>

            </div>
        </div>
    </div>
    <div className="row mt-3 no-gutters">
        <div >
            <h5 className="card-title">Technology Stack</h5>
            <div className="">
                {
                this.state.mentorProfile.technology.split(',').map((item,key)=>{
                    let programmingLanguage = item.toLowerCase();
                    
                    ///below are icons generated by devicon
                    return<i key={key} className={`devicon-${programmingLanguage.trim()}-plain colored`}></i>

                    //if you would like to use Font Mfizz vector icons uncomment the line bellow 
                    //  return<i key={key} className={`icon-${programmingLanguage.trim()}`}></i>

                                 
                     
                   })
                }
           
            
            </div>
        </div>
       
    </div>
    </div>) : (<h2>Loading Data</h2>)

    
        return (
        <div>
            <Header />
            <div className="container">
            
            {hasProfileData}
                
            </div>
        </div>
        )
      }
}

export default MentorProfile;