#import "RNConfig.h"

@implementation RNConfig

// To export a module named RNConfig
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport {
  NSString *targetName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"];
  return @{ @"targetName": targetName };
}

@end
