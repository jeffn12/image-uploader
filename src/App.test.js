import React from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import ImageChooser from './components/ImageChooser';

/**
 * TODO:
 *
 * - test remove highlight on dragleave
 */
describe('My tests', () => {
  test('The dropzone highlights on drag over', () => {
    const { getByRole } = render(<ImageChooser />);
    const dropzone = getByRole('generic', { name: 'imageDropZone' });
    fireEvent.dragOver(dropzone);
    expect(dropzone).toHaveClass('bg-indigo-200');
    expect(dropzone).toHaveClass('border-indigo-300');
  });
  test('The dropzone background resets on drag leave', () => {});
});
describe('User Stories', () => {
  test('User story: I can drag and drop an image to upload it', () => {
    const { getByRole } = render(<ImageChooser />);
    const dropzone = getByRole('generic', { name: 'imageDropZone' });
    const dropEvent = createEvent.drop(dropzone);
    const fileList = [
      new File(['test'], 'test_file.jpg', { type: 'image/jpg' }),
    ];
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: {
          item: (itemIndex) => fileList[itemIndex],
          length: fileList.length,
        },
      },
    });

    fireEvent(dropzone, dropEvent);
  });
  test('User story: I can choose to select an image from my folder', () => {
    render(<ImageChooser />);
    const button = document.getElementById('fileChooserButton');
    fireEvent.click(button, {
      target: {
        files: [new File(['test'], 'test_file.jpg', { type: 'image/jpg' })],
      },
    });
  });
  test('User story: I can see a loader when uploading', () => {});
  test('User story: When the image is uploaded, I can see the image and copy it', () => {});
  test('User story: I can choose to copy to clipboard', () => {});
});
