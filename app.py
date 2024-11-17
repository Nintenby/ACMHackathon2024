import sklearn
import cv2
import os
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def ai_route(url):

    def load_images(path):
        images = []
        labels = []
        for label in os.listdir(path):
            for file in os.listdir(os.path.join(path, label)):
                img = cv2.imread(os.path.join(path, label, file),cv2.IMREAD_GRAYSCALE)
                img = cv2.resize(img, (64, 64))
                img = img.flatten()
                images.append(img)
                labels.append(label)
        return np.array(images), np.array(labels)

    images, labels = load_images(r'C:\Users\sara\Documents\Hackathon\Data')

    X_train, X_test, y_train, y_test = train_test_split(images, labels, test_size=0.2, random_state=42)

    clf = RandomForestClassifier(n_estimators=100,random_state=50)
    clf.fit(X_train, y_train)

    y_pred = clf.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)


    import urllib.request

    def read_image_from_url(url):

        resp = urllib.request.urlopen(url)
        image = np.asarray(bytearray(resp.read()), dtype="uint8")

        image = cv2.imdecode(image, cv2.IMREAD_GRAYSCALE)

        return image

    img=read_image_from_url(url)
    img = cv2.resize(img, (64, 64))
    img = img.flatten()
    return(clf.predict([img])[0])
