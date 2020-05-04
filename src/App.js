import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// http://newsapi.org/v2/top-headlines?country=us&apiKey=7a59606d27fa42019248a65242b6840c

// http://3.23.27.30/services/get/?&_from=1&_to=5
class App extends Component {
  state={ articles: [] }
  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json'); 
     
    fetch('http://3.23.27.30/services/get/?&_from=1&_to=5',{ method: 'GET'})
    .then(res => res.json())
    .then(data=> {
      // const { articles } = data
      console.log(data);
      this.setState({articles: data})

      
    }).catch( error=> {
      console.log('erre',error);
      
    })
  }

  // <figure className="image">
              
  // </figure>
  // <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
  mostrar() {
    
    return this.state.articles.map(article => {
      return(
        <div className="card" key={article.ID}>
          <div className="card-image">

            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={article.image} alt={article.producto} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="subtitle is-6"> {article.producto} </p>
                  <p className="subtitle is-6">S/. {article.price}</p>
                </div>
              </div>
            </div>
            </div>
        </div>
      );
    })
    
  }

  mostrar2() {
    console.log('prueba2',this.state.articles);
    
  }
  render() {
    // console.log('asdsa', this.state.articles[0]);
    
    return (
      <div className="App">
        <h4>Recogo de datos</h4>
      
        
        {this.mostrar()}
        <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
      
      </div>
    );
  }
}

export default App;
