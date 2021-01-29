window.jQuery = function (obj) {
  const elements =
    typeof obj === "string" ? document.querySelectorAll(obj) : obj;
  return {
    oldApi: elements.oldApi,
    addClass(className) {
      elements.forEach((item) => item.classList.add(className));
      return this;
    },
    find(selector) {
      let arr = [];
      elements.forEach((item) => {
        arr = arr.concat(Array.from(item.querySelectorAll(selector)));
      });
      arr.oldApi = this;
      return jQuery(arr);
    },
    end() {
      return this.oldApi ? this.oldApi : this;
    },
    each(fn) {
      elements.forEach((item) => fn(item));
      return this;
    },
    print() {
      console.log(elements);
    },
    parents() {
      let parentsList = [];
      this.each((node) => {
        if (parentsList.indexOf(node.parentNode) === -1) {
          parentsList.push(node.parentNode);
        }
      });
      return jQuery(parentsList);
    },
    children() {
      let childrenList = [];
      this.each((node) => {
        if (childrenList.indexOf(node.children) === -1) {
          childrenList.push(...node.children);
        }
      });
      return jQuery(childrenList);
    },
  };
};
