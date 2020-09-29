import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ImageChooser from './components/ImageChooser';

describe('User Stories', () => {
  test('User story: I can drag and drop an image to upload it', () => {});
  test('User story: I can choose to select an image from my folder', () => {
    render(<ImageChooser />);
    const button = document.getElementById('fileChooserButton');
    fireEvent.click(button, {
      target: {
        files: [new File(['hey'], 'test_file.jpg', { type: 'image/jpg' })],
      },
    });
  });
  test('User story: I can see a loader when uploading', () => {});
  test('User story: When the image is uploaded, I can see the image and copy it', () => {});
  test('User story: I can choose to copy to clipboard', () => {});
});
