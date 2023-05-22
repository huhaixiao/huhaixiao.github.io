# React Native

- https://reactnative.dev/

## Environment Setup

### macOS iOS

- node
- watchman
- Ruby
- Ruby's Bundler
- CocoaPods
- Xcode
- Command Line Tools

```shell
brew install node
brew install watchman

# install ruby
# https://rvm.io

gem install cocoapods
gem install bundler:x.y.z

# ./ios
bundle install
pod install

# Xcode
# https://developer.apple.com/download/all/

# .
npx react-native start
npx react-native run-ios
```

```shell
# clean Xcode cache
rm -rf ~/Library/Developer/Xcode/DerivedData

# .
yarn clear-cache

# .
yarn

# ./ios
bundle install
pod install

# .
npx react-native run-ios --scheme "Scheme"

.ios.js
.android.js
.native.js
```
