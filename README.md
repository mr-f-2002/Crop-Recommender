# Crop Recommendation System with Machine Learning

This project is an intelligent **Crop Recommendation System** built to help farmers and researchers in Bangladesh select the most suitable crops based on environmental data such as temperature, humidity, rainfall, and soil conditions. The system leverages machine learning algorithms to predict the optimal crop for a given area, based on factors like soil nutrients and climatic conditions.

Additionally, the web interface includes a dynamic 3D background with random shapes floating around, created using **Three.js**, providing an engaging visual element to the user experience.

---

## Features

- **Machine Learning Crop Recommendation**: The system predicts the most suitable crop for a given area based on environmental data and soil conditions.
- **Dynamic 3D Background**: A visually appealing 3D background with randomly placed floating shapes, powered by Three.js.
- **User-Friendly Interface**: Simple form for users to input environmental data and receive real-time crop recommendations.

---

## Dataset

The dataset used for training the machine learning model contains the following features:

- **N**: Nitrogen level in the soil
- **P**: Phosphorus level in the soil
- **K**: Potassium level in the soil
- **temperature**: Temperature in the area (°C)
- **humidity**: Humidity in the area (%)
- **ph**: Soil pH level
- **rainfall**: Rainfall in the area (mm)

The **label** (target) contains the crop names, and these are the unique crops in the dataset:

- Rice
- Maize
- Chickpea
- Kidneybeans
- Pigeonpeas
- Mothbeans
- Mungbean
- Blackgram
- Lentil
- Pomegranate
- Banana
- Mango
- Grapes
- Watermelon
- Muskmelon
- Apple
- Orange
- Papaya
- Coconut
- Cotton
- Jute
- Coffee

---

## Installation

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/crop-recommendation-system.git
cd crop-recommendation-system
````

### 2. Install Dependencies
Install the necessary Python packages for running the Flask backend:

````bash
pip install -r requirements.txt
````
Make sure to use a virtual environment (optional but recommended):
````bash
python -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
pip install -r requirements.txt
````
### 3. Run the Application
After setting up the backend and frontend files, start the Flask server:
````bash
python app.py
````
By default, the app will run on http://127.0.0.1:5000/.
