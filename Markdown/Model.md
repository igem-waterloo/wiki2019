# Environmental Model

An important goal of our project is to determine whether, in the viscinity of a root nodule, the Linuron concentration is 
significant enough to damage the Rhizosphere and inhibit nodule growth as plants continue to develop. 

In order to model this, we introduce a diffusion-reaction-advection model, which is a standard method in environmental engineering practices. As a consequence of this we are able to develop heuristics for whether Linuron and 3,4-DCA runoff is significant in addition to the original purpose of the model.

**Insert Video**

## Introducing the Model

As partial differential equation models are quite rare in the world iGEM, we will introduce this model from the ground up. The first component of the model is Fick's Law.

$$ C = [\textrm{Linuron}] $$

$$ D = \textrm{diag}(D_x,D_y,D_z) $$

$$ \nabla\cdot(D\nabla C) = \frac{\partial C}{\partial t} $$

The object D is called the diffusion matrix, which determines the speed of diffusion in different directions. Next, we add an advection term in order to model the movement of Linuron being carried by water.

$$ \nabla \cdot (D\nabla C) - \vec{v}_e \cdot \nabla C = \frac{\partial C}{\partial t}$$

This advection term relies on the hydraulic head, which is a measure of water pressure in the soil. However, water tends to flow around the root nodules, so Linuron transport is diffusion-dominated inside the nodule. Therefore we must use the Navier-Stokes equation in order to find the advection velocity. In order to model degradation, we couple this with our kinetic model to find the following coupled system of PDEs.

$$ \nabla \cdot (D\nabla C) - \vec{v}_e \cdot \nabla C = \frac{\partial C}{\partial t} + \chi_n \frac{V_{max}C}{K_m-C} $$

$$ \varrho \left( \frac{\partial v_e}{\partial t} - v_e \cdot \nabla v_e \right) = \nabla \cdot \sigma(v_e,p)+f $$
$$ \nabla \cdot v_e = 0 $$

## Numerical Methods

In order to solve this model we first convert the system into variational form. The Navier-Stokes terms are given by a midpoint discretization method called Chorin's Method. 

$$\int_\Omega \frac{\partial C}{\partial t} w d\tau = \int_\Omega \left[\nabla \cdot (D \nabla C)w - w v_e\cdot \nabla C - \frac{V_{max}C}{K_m-C}\right] d \tau =$$

$$\int_\Omega \left[(-\nabla C)^T D^T \nabla w -wv_e\cdot \nabla C - \frac{V_{max}C}{K_m-C}\right] d \tau + \int_{\partial \Omega} w( \nabla C)\cdot d \vec{s}$$