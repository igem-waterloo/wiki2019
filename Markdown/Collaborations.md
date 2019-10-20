#### UAlberta iGEM:

Near the beginning of the year, we were approached by the UAlberta iGEM team who were looking to do some more in-depth mathematical modelling.  They were wondering how best to answer some of their questions about their Beetector system with modelling such as: how many bees would they have to assay in the hive to give reliable results?  How could they ensure that the signal would be visible?  To help get them started and give some tips and tricks on how to effectively use modelling in iGEM projects, we met up online to share resources, have rudimentary workshops on modelling basics, and answer questions.  This helped them complete and get started on their modeling.  As well as, it allowed them to start exploring this aspect of iGEM projects without having members with previous experience with mathematical modelling.

Additionally, in the fall with one of our team members (Alina) during their co-op placement at the University of Alberta helped the UAlberta team.  Alina was able to help out in the lab with troubleshooting some experiments surrounding the construction of their construct and be an extra hand on deck before the wiki freeze!

![UAlberta Logo](https://2019.igem.org/wiki/images/1/12/T--Waterloo--UAlbertaCollabLogo.png)

#### Newcastle iGEM:

We first met Newcastle iGEM at the 2018 Jamboree and were very interested in their project ‘Alternative Roots’, which sought to engineer endophytic bacteria for agricultural applications. Since Waterloo’s 2019 project has much in common with this work, a collaboration seemed only natural. During a visit to the UK in April, Dylan met with returning team member Connor and team advisors Dr Thomas Howard and Dr Jon Marles-Wright. This discussion informed our experimental design, choice of controls, and general project strategy. 

In the following months, we arranged several video calls between our two teams. We continued to discuss experimental aspects of the Waterloo project, especially the use of minimum inhibitory concentration (MIC) assays to determine the toxin tolerance of engineered and non-engineered strains. Newcastle performed similar experiments in both 2018 and 2019 and provided helpful literature references and practical advice for this work.

Once Newcastle had chosen their 2019 project, we assisted with aspects of their mathematical model, which sought to describe a CRIPSR SHERLOCk system. We provided relevant resources regarding enzyme kinetics and differential equation modelling and discussed possible limitations of the model.

(Pictured: Dr Thomas Howard, Dr Jon Marles-Wright, Connor, Dylan)
![NC Picture 1](https://2019.igem.org/wiki/images/8/88/T--Waterloo--NCL1.jpg)

(Pictured: Matt, Connor, Danielis, Karen)
![NCL2](https://2019.igem.org/wiki/images/e/e3/T--Waterloo--NCL2.jpg)

#### qGEM

Dylan met with qGEM members Ruben and Janice in June during a visit to Kingston. We discussed design and experimental aspects of our respective projects, as well as modelling, human practices, and possible funding sources. Although qGEM’s project, a handheld THC immunoassay, was very different from our own, it was beneficial to discuss common challenges and approaches.

(Pictured: Ruben, Janice, Dylan)

![qGEM Picture](https://2019.igem.org/wiki/images/8/8c/T--Waterloo--qGEMCollabs.jpg)

#### UBC iGEM

Dylan met with UBC iGEM members Tylo, Samuel, and Emilia in August during a visit to Vancouver. We discussed experimental and design aspects of our respective projects, as well as mathematical modelling, strategies for integrated human practices, and differences in team administration and structure between our iGEM teams.

(Pictured: Tylo, Dylan, Samuel, Emilia)

![UBC Picture](https://2019.igem.org/wiki/images/8/8d/T--Waterloo--UBCCollabs.jpeg)


#### University of Calgary iGEM

This year, we collaborated with University of Calgary’s iGEM team in order to visualize collaborations between iGEM teams globally in addition to showing which topics teams choose to work on.

The process followed was:
* Scrape all team wikis to extract text (parsing team wiki links from https://igem.org/Team_Wikis?year=2016) using the Beautiful Soup Python library
  * Crawling was limited to the team’s domain to prevent crawling external websites
* Tokenize text and identify nouns, using the Natural Language Toolkit (NLTK) library in Python
  * Use fuzzy string matching (computing the Levenshtein distance between two strings to allow for slight variations/typos) for:
  * Identify biological terms that appear most frequently on each team’s wiki (a list of biological terms was curated beforehand)
* On the “Collaborations” pages of wikis, any team names were identified and tracked as collaborations for that specific team
* The geographical location of teams was obtained by extracting the geojson file from the Google Maps document posted in http://2016.igem.org/Community. These addresses were then fed into a Google geocoder API using GeoPy, in order to obtain the exact latitude and longitude of each team.
* The data obtained was displayed using the Dash library in Python, powered by Plotly for a visualization of the teams on a world map

In this visualization, one may hover over each team’s marker to see the team name in addition to any keywords that appeared frequently on the team’s wiki.


