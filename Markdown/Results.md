
# MIC assay results

## Growth curve experiment with wild-type *B. diazoefficiens*

Although we were unable to evaluate the tolerance of engineered *B. diazoefficiens* strains due to time constraints, we nonetheless investigated the tolerance of wild-type *B. diazoefficiens* to linuron and 3,4-DCA. This was evaluated using growth curve MIC experiments performed with hourly absorbance readings from 20 to 25 hours of incubation at 30 C. The absorbances at the five timepoints were plotted versus time and fit with exponential curves of the form y = ae^(kx) + b, where k is growth rate. Sextuplicates were used for each toxin and concentration. 

The results of these experiments are presented in figures 5, 6, and 7.

![]()
*Figure 5*. Growth rate versus linuron concentration from 20 to 25 hours. Error bars represent standard deviations of sextuplicates. The growth rate with no toxin was 0.08639 +/- 0.01232 1/h. The sigmoidal fit parameters A, B, C, and D are 3.23E-03, 3.46E-02, 2.96, and 2.30E+01 respectively.
![]()
*Figure 6*. Growth rate versus linuron concentration from 20 to 25 hours. Error bars represent standard deviations of sextuplicates. The growth rate with no toxin was 0.08639 +/- 0.01232 1/h. The sigmoidal fit parameters A, B, C, and D are 7.43E-03, 3.62E-02, 8.32E-01, and 2.08E+01 respectively.

*Figure 7*. Summary of key inhibitory concentrations for linuron and 3,4-DCA with *B. diazoefficiens* based on growth curves from 20 to 25 hours. 
![]()

These differences in toxicity profiles are demonstrated by the key inhibitory concentrations in figure 7. Linuron’s IC<sub>50</sub> value is higher than that of 3,4-DCA, demonstrating that linuron is generally less toxic than 3,4-DCA. This agrees with reported toxicity values (Tixier, 2002) (Santos, 2014). Comparing IC<sub>10</sub> values shows that 3,4-DCA starts showing toxic effects at a much lower concentration than linuron, due to steeper slope of the plot for linuron. The steeper slope of linuron’s plot also means that linuron’s IC<sub>90</sub> is much lower than that of 3,4-DCA. This means that ful growth inhibition actually requires a lower concentration of linuron than of 3,4-DCA, despite linuron’s lower IC<sub>50</sub>. These differences highlight the importance of examining the entire toxicity profile and various inhibitory concentrations, since these convey much more information that the IC<sub>50</sub> value alone. 

We have therefore experimentally deteremined the toxicity profiles of both linuron and 3,4-DCA toward wild type *B. diazoefficiens*, validating our experimental approach. This information provides also a reference point against which to compare engineered strains, other toxins, or bacterial species.

## Single-timepoint experiment with wild-type *B. diazoefficiens*

In addition to the growth curve experiment peformed with *B. diazoefficiens* and linuron and 3,4-DCA, we also completed this experiment in single-time point format. This was done using one Abs<sub>600</sub> after 22 hours incubation at 30 C. Figures 8 and 9 show plots of Abs<sub>600</sub> versus toxin concentration. These results are shown in figures 8, 9, and 10. Fitting was performed to the four parameter in equation 1.

![]()
*Figure 8*. Abs<sub>600</sub> versus linuron concentration at 22 hours. Error bars represent standard deviations of sextuplicates. The sigmoidal fit parameters A, B, C, and D are 1.28E-02, 5.52E-02, 1.62, and 1.28E+01 respectively.

![]()
*Figure 9*. Abs<sub>600</sub> versus linuron concentration at 22 hours. Error bars represent standard deviations of sextuplicates. The sigmoidal fit parameters A, B, C, and D are 1.50E-02, 5.47E-02, 8.97E-01, and 3.08E+01 respectively.  

*Figure 10*. Summary of key inhibitory concentrations for linuron and 3,4-DCA with *B. diazoefficiens* after 22 hours. 
![]()


Figures 8 and 9 both show the characteristic sigmoidal shapes expected for MIC experiments. All datapoints are very close to the sigmoidal fit, indicating that this model is a good representation of the data. 

Figure 10 summarizes some key inhibitory concentrations as calculated based on these growth curves. Although the two curves have the same general shape as those determined using the growth curve MICs, the calculated inbitory concentrations are somewhat different. The single timepoint data’s IC<sub>50</sub> values suggest that linuron is more toxic that 3,4-DCA, which disagrees with the results obtained using growth curves and literature toxicity data (Tixier, 2002) (Santos, 2014). This highlights the shortfalls of determining toxicity from Abs<sub>600</sub> at a single timepoint and the importance of using growth curves to evaluate a toxin’s overall effect on an organism’s growth rate. 


## Single-timepoint experiment with *E. coli* empty vector and constructs 

We also chose to evaluate the linuron and 3,4-DCA tolerance of our engineered DH5α strains. We performed single-timepoint MICs after 7 hours incubation at 30 C using empty vector pRJPaph-GFP and two constructs, numbers 14 and 21, which had been verified by colony PCR, sequencing, and GFP fluorescence. Each was completed in triplicate using LB supplemented with tetracycline to promote vector retention. Figures 3 and 4 show plots of Abs<sub>600</sub> versus log toxin concentration for each.

![]()
*Figure 3*. Abs<sub>600</sub> versus linuron concentration for 3 engineered DH5α strains at 7 hours. “EV” is pRJPaph-GFP and “14” and “21” each contain the construct with LibA and NAT1. Datapoints are averages of triplicates.

![]()
Figure 4. Abs<sub>600</sub> versus 3,4-DCA concentration for 3 engineered DH5α strains at 7 hours. “EV” is pRJPaph-GFP and “14” and “21” each contain the construct with LibA and NAT1. Datapoints are averages of triplicates.

Linuron (figure 3) does not show any significant inhibition, even at the highest linuron concentrations. This means that it is not possible to compute parameters such as IC<sub>50</sub>, so sigmoidal fitting was not applied. Since higher linuron concentrations would not be possible due to solubility constraints, this type of assay is a poor method for evaluating LibA and NAT1 activity in *E. coli*. Additionally, there are no significant differences between the Abs<sub>600</sub> values of the different strains, suggesting that the construct and empty vector do not cause measurable differences in growth rate. 

3,4-DCA (figure 4) shows nearly equal inhibition of all three strains beginning at 226 µM 3,4-DCA. However, since the lower “minimal growth rate” region is absent, sigmoidal fitting was not applied, so it is not possible to calculate paramters such as IC<sub>50</sub>. As with linuron, obtained data at higher toxin concentrations would be challenging due to solubility constraints. Additionally, there are no significant differences between the Abs<sub>600</sub> values of the different strains at any toxin concentration, suggesting that the construct and empty vector do not cause differences in growth.

These experiments therefore demonstrate that the construct does not lend linuron or 3,4-DCA tolerance to *E. coli* DH5α. However, the lack of difference in growth rate provides some evidence that LibA and NAT1 do not impose a significant metabolic burden on DH5α when used in this expression system

Citations

Santos, S., Romeu, V., Maria, F., Sharon, C., António, M., Joaqium, V., & Amália, J. (2014). Toxicity of the herbicide linuron as assessed by bacterial and mitochondrial model systems. Toxicology in Vitro, 28 doi:10.1016/j.tiv.2014.04.004

Tixier, C., Sancelme, M., Aït-Aïssa, W., P., Bonneymoy, F., Cuer, A., Fruffaut, N., & Veschambre, H. (2002). Biotransformation of phenylurea herbicides by a soil bacterial strain, arthrobacter sp. N2: Structure, ecotoxicity and fate of diuron metabolite with soil fungi. Chemosphere, 46, 519-526. doi:10.1016/S0045-6535(01)00193-X

