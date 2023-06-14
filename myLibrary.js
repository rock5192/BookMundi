const myLibrary = function () {
  function changeClassName(element, className) {
    element.className = className;
  }

  function getDataset(element) {
    return element.dataset;
  }

  function injectElement(oldElement, newElement) {
    oldElement.appendChild(newElement);
  }

  function ajaxRequest(url, method, data, successCallback, errorCallback) {}

  function getRequest(url) {
    var response = fetch(url);
  }

  function getValue(element) {
    if (element.tagName === "INPUT" || element.tagName === "SELECT") {
      return element.value;
    } else if (element.tagName === "CHECKBOX") {
      element.checked = value;
    }
  }

  function setValue(element, value) {
    if (element.tagName === "INPUT" || element.tagName === "SELECT") {
      element.value = value;
    } else if (element.tagName === "CHECKBOX") {
      element.checked = true;
    }
  }

  return {
    changeClass: changeClassName,
    getDataset: getDataset,
    injectElement: injectElement,
    ajaxRequest: ajaxRequest,
    getRequest: getRequest,
    getValue: getValue,
    setValue: setValue,
  };
};

const element = document.getElementById("myElement");
myLibrary.changeClass(element, "newName");

const dataSet = myLibrary.getDataset(element);

const newElement = document.createElement("div");
myLibrary.injectElement(document.body, newElement);

myLibrary.ajaxRequest("url", "POST", data, successCallback, errorCallback);

myLibrary.getRequest("url");

const inputElement = document.getElementById("myInput");
const value = myLibrary.getValue(inputElement);

const inputSet = document.getElementById("myInput");
myLibrary.setValue(inputSet, "ram");

const checkboxElement = document.getElementById("checkBox");
myLibrary.setValue(checkboxElement, true);
