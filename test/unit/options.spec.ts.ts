import * as InteractWrapper from '../../src/index';

let dropZoneDefaults = {
  accept: '.draggable',
  overlap: .5,
};

let resizableDefaults = {
  edges: {
    bottom: true,
    left: true,
    right: true,
    top: true,
  }
};

let actionOptionsOnly = {
  test: 123
};

let actionOptionsOnlyInNewStructure = {
  action : {
    test: 123
  }
};

let actionAndInteractableOptions = {
  action : {
    test: 123
  },
  interactable : {
    test: 456
  }
};

let interactableOptionsOnly = {
  interactable : {
    test: 456
  }
};

let dataDriveTests = [
  { action: 'draggable', element: 'InteractDraggableCustomAttribute', options: undefined, expected: { actionOptions: {}, interactOptions: undefined }},
  { action: 'draggable', element: 'DraggableCustomAttribute', options: undefined, expected: { actionOptions: {}, interactOptions: undefined }},
  { action: 'dropzone', element: 'InteractDropzoneCustomAttribute', options: undefined, expected: { actionOptions: {}, interactOptions: undefined }},
  { action: 'dropzone', element: 'DropzoneCustomAttribute', options: undefined, expected: { actionOptions: dropZoneDefaults, interactOptions: undefined }},
  { action: 'dropzone', element: 'InteractGesturableCustomAttribute', options: undefined, expected: { actionOptions: {}, interactOptions: undefined }},
  { action: 'resizable', element: 'InteractResizableCustomAttribute', options: undefined, expected: { actionOptions: {}, interactOptions: undefined }},
  { action: 'resizable', element: 'ResizableCustomAttribute', options: undefined, expected: { actionOptions: resizableDefaults, interactOptions: undefined }},,

  { action: 'draggable', element: 'InteractDraggableCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }},
  { action: 'draggable', element: 'DraggableCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }},
  { action: 'dropzone', element: 'InteractDropzoneCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }},
  { action: 'dropzone', element: 'DropzoneCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }},
  { action: 'dropzone', element: 'InteractGesturableCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }},
  { action: 'resizable', element: 'InteractResizableCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }},
  { action: 'resizable', element: 'ResizableCustomAttribute', options: actionOptionsOnly, expected: { actionOptions: actionOptionsOnly, interactOptions: undefined }}, 

  { action: 'draggable', element: 'InteractDraggableCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},
  { action: 'draggable', element: 'DraggableCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},
  { action: 'dropzone', element: 'InteractDropzoneCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},
  { action: 'dropzone', element: 'DropzoneCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},
  { action: 'dropzone', element: 'InteractGesturableCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},
  { action: 'resizable', element: 'InteractResizableCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},
  { action: 'resizable', element: 'ResizableCustomAttribute', options: actionOptionsOnlyInNewStructure, expected: { actionOptions: actionOptionsOnlyInNewStructure.action, interactOptions: undefined }},


  { action: 'draggable', element: 'InteractDraggableCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},
  { action: 'draggable', element: 'DraggableCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},
  { action: 'dropzone', element: 'InteractDropzoneCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},
  { action: 'dropzone', element: 'DropzoneCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},
  { action: 'dropzone', element: 'InteractGesturableCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},
  { action: 'resizable', element: 'InteractResizableCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},
  { action: 'resizable', element: 'ResizableCustomAttribute', options: actionAndInteractableOptions, expected: { actionOptions: actionAndInteractableOptions.action, interactOptions: actionAndInteractableOptions.interactable }},

  { action: 'draggable', element: 'InteractDraggableCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: {}, interactOptions: interactableOptionsOnly.interactable }},
  { action: 'draggable', element: 'DraggableCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: {}, interactOptions: interactableOptionsOnly.interactable }},
  { action: 'dropzone', element: 'InteractDropzoneCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: {}, interactOptions: interactableOptionsOnly.interactable }},
  { action: 'dropzone', element: 'DropzoneCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: dropZoneDefaults, interactOptions: interactableOptionsOnly.interactable }},
  { action: 'dropzone', element: 'InteractGesturableCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: {}, interactOptions: interactableOptionsOnly.interactable }},
  { action: 'resizable', element: 'InteractResizableCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: {}, interactOptions: interactableOptionsOnly.interactable }},
  { action: 'resizable', element: 'ResizableCustomAttribute', options: interactableOptionsOnly, expected: { actionOptions: resizableDefaults, interactOptions: interactableOptionsOnly.interactable }}


];

dataDriveTests.forEach(dataDriveTest => {
  describe('Given an interactable action ', () => {
    let interactableWrapper;
    let element;
    let mockInteractFunc;
    let mockInteractable;
    beforeEach(() => {
      element = document.createElement('div');
      mockInteractable = jasmine.createSpyObj('interactable'+ dataDriveTest.element, [dataDriveTest.action, 'on', 'unset']); 
      mockInteractFunc = jasmine.createSpy('interactFunc');
      mockInteractFunc.and.returnValue(mockInteractable);
      mockInteractable[dataDriveTest.action].and.returnValue(mockInteractable);
      mockInteractable.on.and.returnValue(mockInteractable);
      interactableWrapper = new InteractWrapper[dataDriveTest.element](element, mockInteractFunc);
    });

    afterEach(() => {
      element.remove();
    });

    describe('When it is bound with options', () => {
      beforeEach(() => {
        interactableWrapper.value = dataDriveTest.options;
        interactableWrapper.bind()
      });

      afterEach(() => {
        interactableWrapper.unbind();
      });

      it("Then the interactable factory function was called with the correct options", () => {
        expect(mockInteractFunc).toHaveBeenCalledWith(jasmine.any(Object), dataDriveTest.expected.interactOptions);
      });

      it("Then the interactable action method was called with the correct options", () => {
        expect(interactableWrapper.interactable[dataDriveTest.action]).toHaveBeenCalledWith(dataDriveTest.expected.actionOptions);
      });
    });
  });
});
