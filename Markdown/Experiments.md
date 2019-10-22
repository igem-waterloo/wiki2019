# Plant Inoculation, Growth, and Nodulation 

## Seed Inoculation (*optional*)
1. Grow 3-4 YM plate lawns of *Bradyrhizobium diazoefficiens*.
   + The manitol in the YM media should allow for the bacteria to adhere better to the seed coat, and acts as a carbon source for them. 

2. After lawn is grown up, asceptically add 10 mL of YM liquid media and scrape off culture (without breaking the agar), and add to a sterile beaker.

3. Repeat this process, adding another 10 mL to the plate, and wash off any extra culture that might remain. Add this to the previous beaker. You should have approximately 20 mL per plate from this.

4. Repeat for each plate.
   + Place all the liquid into a single beaker.

5. Soak 64 sterilized soybean seeds in this liquid culture for an hour, in the beaker.

6. Remove seeds from solution by covering another beaker with a cheesecloth or gauze, and pouring out the beaker into it (all seeds should be caught on the fabric).

7. Use hands or tweezers to remove the seeds - immediately plant into soaked vermiculite.

## Flood Inoculation (*optional*) 
1. Grow 3-4 YM plate lawns of *Bradyrhizobium diazoefficiens*.

2. After lawn is grown up, asceptically add 10 mL of the bacteriological saline solution and scrape of off the culture from the plate, and add to a sterile beaker.

3. Repeat this process, adding another 10 mL to the plate, and wash off any extra culture on the plate.
   + Add this to the previous beaker used.
   + You should have approximately 20 mL per plate from this.

4. Repeat for each plate.

5. Use a sterile large syringe (60 ml) and add droplets (~ 5mL) to the root area of all the seedlings.

6. Try to concentrate this to directly above the roots.
   + Does not need to be sterile.

7. Place seedlings back into the incubator.

## Seed Sterilization 
1. Place seeds in 50mL falcon tube.

2. Immerse in 0.1% Trixton X-100 for 2 minutes.

3. Decant into a waste beaker.

4. Immerse in 70% ethanol for 2 minutes.

5. Decant into waste beaker.

6. Rinse 3 times with DI H2O.


## Germinating and Planting the Seeds
1. After seed sterilization, wrap moist seeds on a paper towel and place in a plastic bag (a ziplock, for example) and leave for two days,
   + Check the seeds after the first 24 hours, and observe if germination has taken place.
2. After 2 days, or once you see sprouting from the seeds, plant in prepared pots.
   + (*To prepare planting*) Fill each pot with vermiculite, almost to the top.

3. Water the vermiculite with warm water, the aim here is to soak it until it becomes x5-x7 times heavier than it was before.
   + This is not-quantitative, and does not need to be precisely measured.
   + Ensure that: the water is warm, and that you don't oversoak. 

4. Lightly water the pots with cold water, so that the top of the vermiculite is luke-warm to the touch.
   + Try not to oversoak the vermiculite.

5. Push three holes into the vermiculate that are one inch deep and equidistant from each other.
   + You can use a pencil. 
   + Each hole should be 1/2 inch - 1 inch in depth. The point of using the pencil is that the sharpened part of the pencil should be about that long. The holes don't have to be perfectly separate, but just far apart enough that if each seed added to the hole was to germinate, the root systems wouldn't entangle.

6. Add 3 seeds per pot, place in the incubator and wait 5 days.
   + Add one seed to each hole.

## Care for Plants and Bacterial Treatment 
   + (*optional*) after shoots show, flood with bacterial inoculum.
   + Remove any underdeveloped shoots, always leaving one growing plant in the pots.
   + If the vermiculite is moist to the touch, even after two days, do not re-water. 
   + Immedietly water if the vermiculite is dry, even if the two days haven't passed. 

### To water:

1. The plants should be watered once the top of the vermiculite is drier to the touch, on the top.
   + Water with DI water.
2. Fill a watering can and topically apply to the plants.

# Minimum Inhibitory Concentration (MIC): Herbicide Tolerance Assays

## MIC assay design

We would like to thank [Newcastle iGEM](https://2019.igem.org/Team:Newcastle/Collaborations#UofW "Waterloo 2019 Collaborations"), and specifically Connor, for their support in this area of the project. 

MIC assays are used in many areas of microbiology, with applications including evaluation of novel antimicrobial agents (Foerster, 2016). Organisms generally grow faster at lower concentrations of a given toxin, giving a profile as shown in figure 1. The profile’s shape is explained as follows: at concentrations below a critical toxin concentration, the organism is completely uninhibited, allowing it to grow at a maximal rate. At concentration above a critical toxin concentration, the organism is mostly inhibited, resulting in minimal growth. At the critical “minimum inhibitory” concentration, a much steeper transition region exists. The position and steepness of this transition region reflect toxicity: an organism with a higher toxin tolerance 

![Fig1](https://2019.igem.org/wiki/images/f/f2/T--Waterloo--Fig1.png "Profile of Microbial Growth Rate Versus Toxin Concentration")

Figure 1 above represents an idealized profile of microbial growth rate versus toxin concentration.

Various MIC formats and methods exist, but we chose to use a 96-well plate format, allowing many toxin concentrations to be evaluated in replicate at the same time. A plate-reading spectrophotometer was then used to measure the bacterial growth in each well using absorbance of light at 600 nm (Abs<sub>600</sub>). 

We conducted MIC experiments with both *E. coli* and *B. diazoeffiens* and evaluated tolerance toward both linuron and 3,4-DCA. 

We used a combination of approaches to evaluate growth, measuring Abs<sub>600</sub> at a single timepoint for some experiments and Abs<sub>600</sub> over time for other experiments to calculate growth rate. Single-timepoint MICs are much more convenient to perform, and show a snapshot of growth represented as Abs<sub>600</sub> vs concentration. This is sufficient for some purposes, but fails to take into account the overall growth characteristics of a each bacterial population, especially when different strains or species are being compared. For example, two bacterial strains may have the same growth rate during exponential phase, but if one had a slightly longer lag phase, its Abs<sub>600</sub> will appear lower at a given point in time, falsely suggesting poorer toxin tolerance. Single timepoint OD values are also affected greatly by small differences in the OD of the added broth culture. Collecting Abs<sub>600</sub> data at several timepoints allows for calculation of growth rate, a much more robust measure of a strain’s ability to grow at a certain toxin concentration.

Timepoints for measuring growth were determined by trial and error, with the goal of taking measurements during mid-log phase. This phase of growth corresponds to the greatest differences between bacterial populations growing at different rates for single readings and provides the best estimation of growth rate if multiple readings are used. For *E. coli*, single timepoints were taken at 7 hours. For *B. diazoefficiens*, single timepoints were taken at 24 hours and growth curves from 22-30 hours. 

In summary, our MIC protocol involved the following:

* Grow organism of interest in appropriate liquid media to mid-exponential phase, verifying by measuring Abs<sub>600</sub>
* Prepare a solution of the toxin of interest in the same growth media used for the liquid culture
* Prepare serial dilutions of the toxin of interest across the columns of 96-well plate
* Add a fixed volume of the mid-exponential phase liquid culture to each well
* Incubate the 96-well plate, allowing the organism to grow
* Read Abs<sub>600</sub> of each well at one or more timepoints to evaluate growth

This is presented in greater detail in the below protocol.

<object data="https://2019.igem.org/wiki/images/9/98/T--Waterloo--MICProtocol.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://2019.igem.org/wiki/images/9/98/T--Waterloo--MICProtocol.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://2019.igem.org/wiki/images/9/98/T--Waterloo--MICProtocol.pdf">Download PDF</a>.</p>
    </embed>
</object>

Due to *E. coli*’s fast growth rate, we chose to dilute it from overnight culture in LB broth to a target Abs<sub>600</sub> of 0.1 before each experiment. *B. diazoefficiens* was allowed to grow for approximately 4 days and 16 hours to an Abs<sub>600</sub> of 0.4-0.6, which is thought to correspond to mid-exponential phase. 

Since linuron and 3,4-DCA both have limited water solubility, dissolving directly into LB or TY media was not practical, even at concentrations well below the solubility. Instead, concentrated solutions of linuron and 3,4-DCA were prepared in DMSO (approx. 45 mM and 90 mM respectively), and these were then used to prepare working solutions of 290 µM linuron and 550 µM 3,4-DCA. The very low concentration of DMSO in the solutions was assumed to be of negligible toxicity to the organisms. 

The 96-well plate’s border was filled with plain LB or TY broth in order to serve as a barrier to evaporation during incubation and to act as a control for potential contamination.

## Analysis of MIC data

For single-timepoint readings, Abs<sub>600</sub> data were corrected by subtracting the average broth-only blank. 

For growth curve experiments, Abs<sub>600</sub> data were plotted versus measurement time in hours and fit with a curve of the form y = ae<sup>kx</sup> + b, where k is growth rate in reciprocal hours. 

Abs<sub>600</sub> for growth rate was analysed by plotting versus toxin concentration. A horizontal log scale was used for convenience. The data were then fit using an empirically-chosen 4-parameter sigmoidal curve of the form shown in equation 1 (Tixier, 2002).
 
![Eq1](https://2019.igem.org/wiki/images/e/e6/T--Waterloo--Eq1.png)

This was completed using least squares regression in Microsoft Excel Solver. The four parameters serve to summarize the relationship between growth rate or Abs<sub>600</sub> and pesticide concentration. This relationship also allows the calculation of parameters such as inhibitory concentrations, such as IC<sub>50</sub>, IC<sub>10</sub>, or IC<sub>90</sub>, which represent the amounts of toxin required to toxin concentrations required to inhibit 10, 50, or 90 % of growth respectively. Inhibitory concentration at a given level f is calculated from the sigmoidal fit parameters as follows: y<sub>f</sub> = A + B(1 – f), the IC<sub>50</sub> is calculated by substituting y<sub>f</sub> into the four parameter fit above and solving for x, which corresponds to IC<sub>f</sub>.

![Fig2](https://2019.igem.org/wiki/images/1/17/T--Waterloo--Fig2.png)

Figure 2 above is an idealized representation of IC<sub>10</sub>, and IC<sub>90</sub>.
 


