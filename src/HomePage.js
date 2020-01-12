import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Character from './Character';
import Episode from './Episode';
import Location from './Location';
import {Link} from 'react-router-dom';

class HomePage extends Component{
    render(){
		// <HashRouter>

		// </HashRouter>
		return(
			<div>
				<div className="about">
					<h1>Rick and Morty</h1>
					<hr />
					<p>
						<strong>Rick and Morty</strong> is an American adult animated science fiction sitcom 
						created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming 
						block <br /> ‘Adult Swim’. The series follows the misadventures of cynical mad scientist
						Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time
						<br />between domestic life and interdimensional adventures. The series premiered on 
						December 2, 2013, and the third season concluded on October 1, 2017.<br /> In May 2018, the
						series was picked up for an additional 70 episodes over an unspecified number of 
						seasons.
					</p>
					<p>
						Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and 
						Sarah Chalke voicing the rest of the family. The series originated from an animated<br /> 
						short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti,
						created by Roiland for Channel 101, a short film festival co-founded by Harmon.<br /> When 
						Adult Swim approached Harmon for television show ideas, he and Roiland decided to 
						develop a program based on the short. The series has been acclaimed by<br /> critics for its 
						originality, creativity and humor.
					</p>
				</div>		
			</div>
		)
  	
	}

}
export default HomePage;