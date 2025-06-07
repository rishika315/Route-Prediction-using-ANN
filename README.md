# 🧭 Route Prediction using ANN (Artificial Neural Network)

**Optimized Path Visualization from Lalbaugcha Raja to Girgaon Chowpatty**

---

## 🎯 Project Objective

This project demonstrates an **Artificial Neural Network (ANN)-driven route prediction system** using a real-world use case: the **Ganesh Visarjan route from Lalbaugcha Raja Pandal to Girgaon Chowpatty**. The goal is to illustrate how route prediction can be used for optimized path visualization, supporting better decision-making for event management, urban planning, and logistics.

---

## 🌐 Live Visualization

The app leverages **React + Leaflet** to display the route on a dynamic map. It plots the predicted/optimized path from start to destination, highlighting major checkpoints.

📍 **Start**: Lalbaug Cha Raja Pandal
🏁 **End**: Girgaon Chowpatty
🛣️ **Route Includes**:

* Sant Gadge Chowk
* Rusi Mehta Chowk
* Laxmi Medical
* Fernandes Computer Solution
* Shah Purvi Chandra Chowk

---

## 💡 Key Features

* 🔴 **Polyline Route Rendering** using [Leaflet](https://leafletjs.com/)
* 📍 **Interactive Markers** with labeled popups for each checkpoint
* 🧠 **ANN-based Optimization Logic** (can be extended to include dynamic predictions)
* 🗺️ **TileLayer from OpenStreetMap** for real-world visuals
* 📑 **Applications section** explaining practical benefits of ANN for route prediction

---

## 🧠 How ANN is Used

Although not deeply shown in code (this example uses static coordinates), the underlying concept is:

* **Training ANN** on historical route data (e.g., vehicle movements, timings, traffic patterns)
* **Predicting optimal next points** in the path based on the input source
* Outputting a **sequence of latitude-longitude pairs** representing the predicted route

This predicted route is then visualized on the map.

---

## 🛠️ Tech Stack

| Technology       | Purpose                                                           |
| ---------------- | ----------------------------------------------------------------- |
| React            | Frontend framework                                                |
| Leaflet          | Interactive maps                                                  |
| React-Leaflet    | Leaflet bindings for React                                        |
| JavaScript       | Logic & integration                                               |
| ANN (Conceptual) | Route prediction model (can be implemented in TensorFlow/PyTorch) |

---

## 🔄 Project Flow

```plaintext
User opens map →
  Loads predicted route →
    Displays route from ANN model →
      Marks key locations with popups →
        Explains practical real-world applications
```

---

## 📂 Project Structure

```
project-root/
│
├── src/
│   ├── components/
│   │   └── AnnModelMap.js        # Map + Application insights component
│   ├── App.js                    # Route setup using React Router
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## 💻 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ann-route-map.git
cd ann-route-map
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Real-World Applications of ANN in Route Prediction

The predictive ANN model enables several practical use cases:

### 🔧 Route Optimization

Finds **faster and smoother paths**, ideal for navigation systems and emergency planning.

### 🚦 Traffic Management

Helps city planners **reduce congestion** by predicting high-traffic zones and rerouting traffic.

### 🎉 Event Planning

Essential for **crowd control** and ensuring safe passage during events like Ganesh Visarjan.

### 📦 Delivery Logistics

Improves delivery planning by predicting **efficient delivery sequences**.

### 🏙️ Urban Development

Informs city infrastructure planning by **analyzing movement patterns** and identifying bottlenecks.

---

# License

This repository is proprietary and all rights are reserved. No usage, modification, or distribution is allowed without permission.


